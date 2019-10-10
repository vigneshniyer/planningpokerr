import { join } from "path";

export const createRoom = (room) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        // const userId = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        let joinMessage = {
            author: 'them',
            type: 'text',
            data: {
                text: "🤖 " + getState().user.name + " has joined the room."
            }
        };

        fireStore.collection('rooms').add(
            {
                name: room.name,
                users: [ 
                    {
                        'name':getState().user.name,
                        'id':getState().user.id,
                        'isOpen': false,
                        'newMessagesCount': 0
                    } 
                ],
                moderator: getState().user.id,
                currentStory: '',
                currentStoryId: null,
                currentVotes: [],
                roundsHistory: [],
                activeRound: false,
                messageList: [joinMessage],
                currentStartTime: 0,
                stories: room && room.stories? room.stories : []
            }
        )
        .then((room) => {
            console.log("THe room created is :", room);
            dispatch({ type:'CREATE_ROOM', room:room })
        })
        .catch((err) => {
            dispatch({ type: 'CREATE_ROOM_ERROR', err })
        })

    }
};

export const joinRoom = (room) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        // const userId = getState().firebase.auth.uid;
        // const profile = getState().firebase.profile;
        // const user = {"id":userId, "name":profile.firstName}

        const userId = getState().user.id;
        const username = getState().user.name;
        const user = {"id":userId, "name":username}
        let joinMessage = {
            author: 'them',
            type: 'text',
            data: {
                text: "🤖 " + username + " has joined the room."
            }
        };

        const roomsRef = fireStore.collection('rooms').doc(room.id)
        roomsRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                fireStore.collection('rooms').doc(room.id).update({
                users: fireStore.FieldValue.arrayUnion(user),
                messageList: fireStore.FieldValue.arrayUnion(joinMessage),
                })
                .then(
                    dispatch({ type:'JOIN_ROOM', room:room })
                )
                .catch((err) => {
                    dispatch({ type: 'JOIN_ROOM_ERROR', err })
                })
            } else {
                // alert("Invalid room!");
                dispatch({ type: 'JOIN_ROOM_ERROR' });
            }
        });
    }
};

export const updateCurrentStory = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        fireStore.collection('rooms').doc(data.id).update({
            "currentStory": data.currentStory
        })
        .then(() => {
            dispatch({ type:'UPDATE_TEST', data: data })
        })
        .catch((err) => {
            dispatch({ type: 'UPDATE_TEST_ERROR', err })
        })

    }
};

export const toggleRound = (toggle) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        const fireBase = getFirebase();

        if(toggle.activeRound) {

            fireStore.collection('rooms').doc(toggle.id).update( {
                activeRound: toggle.activeRound,
                currentStoryId: toggle.currentStoryId,
                currentVotes: [],
                currentScore: null,
                currentStartTime: new Date().getTime()
            })
            .then(() => {
                dispatch({ type:'TOGGLE_ROUND', data: toggle })
            })
            .catch((err) => {
                dispatch({ type: 'TOGGLE_ROUND_ERROR', err })
            })

        } else {
            let room = getState().firestore.ordered.rooms[0];
            let score = 0;
            if(room.currentVotes.length > 0) {
                score = room.currentVotes.reduce(
                    (total, voteObj) => {
                        return total + voteObj.vote;
                }, 0);
                score = score / room.currentVotes.length;
            }
            
            let currentEndTime = new Date().getTime();
            let duration = currentEndTime - room.currentStartTime;
            duration = 1000*Math.round(duration/1000); // round to nearest second
            var d = new Date(duration);
            let history = {
                storyId: room.currentStoryId,
                storyName: room.currentStory,
                score: score,
                time: currentEndTime,
                duration: d.getUTCMinutes() + 'm  ' + d.getUTCSeconds() + 's'
            }

            fireStore.collection('rooms').doc(toggle.id).update( {
                activeRound: toggle.activeRound,
                roundsHistory: fireStore.FieldValue.arrayUnion(history),
                //currentVotes: [],
                currentStory: '',
                currentStoryId: null,
                currentScore: score
            })
            .then(() => {
                dispatch({ type:'TOGGLE_ROUND', data: toggle })
            })
            .catch((err) => {
                dispatch({ type: 'TOGGLE_ROUND_ERROR', err })
            })

        }

    }
};

export const castVote = (currentVote) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        const userVote = (({ userId, vote, userName }) => ({ userId, vote, userName }))(currentVote);
        let voteList=[];
        let room = getState().firestore.ordered.rooms[0]; 
        if(room && room.currentVotes) {
            voteList = room.currentVotes.filter(vote => {
                return vote.userId !== userVote.userId
            })
        }
        voteList.push(userVote);
        fireStore.collection('rooms').doc(currentVote.roomId).update({
            currentVotes: voteList
        })
        .then(() => {
            dispatch({ type:'CAST_VOTE', currentVote })
        })
        .catch((err) => {
            dispatch({ type: 'CAST_VOTE_ERROR', err })
        })
        

    }
};

export const leaveRoom = (room) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        const userId = getState().user.id;
        const userName = getState().user.name;
        let quitMessage = {
            author: 'them',
            type: 'text',
            data: {
                text: "🤖 " + userName + " has left the room."
            }
        };
        Promise.all([
            room.users.length == 1 && room.users[0].id == userId ? 
            // if last user, delete the entire room
            fireStore.collection('rooms').doc(room.id).delete() 
            :
            // update list of room users by filtering out leaving user
            fireStore.collection('rooms').doc(room.id).update({
                users: room.users.filter(user => user.id !== userId),
                messageList: [...room.messageList, quitMessage]
            }),
            
            fireStore.collection('users').doc(userId).delete()  
            
        ])
        .then(
            // dispatch({ type:'LEAVE_ROOM', room:room }),
            // dispatch({ type:'CLEAR_USER', room:room }),
            dispatch({ type:'CLEARSTORE', room:room }),
        )
        .catch((err) => {
            dispatch({ type: 'LEAVE_ROOM_ERROR', err })
        })

        

    }
};

export const sendMessage = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        let room = getState().firestore.ordered.rooms[0]; 
        console.log("Send : ", data);
        let messageList=[];
        if(room && room.messageList) 
            messageList = [...room.messageList, data];
        else
            messageList.push(data);

            
        fireStore.collection('rooms').doc(room.id).update({
            "messageList": messageList,
            "users": room.users
        })
        .then(() => {
            dispatch({ type:'UPDATE_TEST', data: data })
        })
        .catch((err) => {
            dispatch({ type: 'UPDATE_TEST_ERROR', err })
        })

    }
};

// export const readMessage = (data) => {
//     return (dispatch, getState, { getFirebase, getFirestore } ) => {
//         const fireStore = getFirestore();
//         let room = getState().firestore.ordered.rooms[0]; 
//         let users = [];
//         if(room && room.users){
//             users = [...room.users];
//         users.map((user) => {
//             if(user.id == data.id) {
//                 if(!user.isOpen)
//                     user.newMessagesCount = 0;
//                 user.isOpen = !user.isOpen;
//             }
//         })
        
//         console.log('Reading users are ', room.users);
//         fireStore.collection('rooms').doc(room.id).update({
//             "users": users
//         })
//         .then(() => {
//             dispatch({ type:'UPDATE_TEST', data: data })
//         })
//         .catch((err) => {
//             dispatch({ type: 'UPDATE_TEST_ERROR', err })
//         })

//     }
//     };
// }
