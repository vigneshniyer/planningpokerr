export const createRoom = (room) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        // const userId = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        fireStore.collection('rooms').add(
            {
                name: room.name,
                users: [ 
                    {
                    // 'id': userId,
                    // 'name':profile.firstName
                    'name':getState().user.name,
                    'id':getState().user.id
                    } 
                ],
                currentStory: '',
                currentStoryId: null,
                currentVotes: [],
                roundsHistory: [],
                activeRound: false
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
        
        fireStore.collection('rooms').doc(room.id).update({
            users: fireStore.FieldValue.arrayUnion(user)
        })
        .then(
            dispatch({ type:'JOIN_ROOM', room:room })
        )
        .catch((err) => {
            dispatch({ type: 'JOIN_ROOM_ERROR', err })
        })

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

        if(toggle.activeRound) {

            fireStore.collection('rooms').doc(toggle.id).update( {
                activeRound: toggle.activeRound,
                currentStoryId: toggle.currentStoryId
            })
            .then(() => {
                dispatch({ type:'TOGGLE_ROUND', data: toggle })
            })
            .catch((err) => {
                dispatch({ type: 'TOGGLE_ROUND_ERROR', err })
            })

        } else {
            let room = getState().firestore.ordered.rooms[0];
            var score = 0;
            if(room.currentVotes) {
                score = room.currentVotes.reduce(
                    (total, voteObj) => {
                        return total + voteObj.vote;
                }, 0);
                score = score / room.currentVotes.length;
            }
            

            let history = {
                storyId: room.currentStoryId,
                storyName: room.currentStory,
                score: score
            }

            fireStore.collection('rooms').doc(toggle.id).update( {
                activeRound: toggle.activeRound,
                roundsHistory: fireStore.FieldValue.arrayUnion(history),
                currentVotes: [],
                currentStory: '',
                currentStoryId: null
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
        fireStore.collection('rooms').doc(currentVote.roomId).update({
            // "activeRound": toggle.activeRound
            currentVotes: fireStore.FieldValue.arrayUnion(userVote)
        })
        .then(() => {
            console.log("done voting, ")
            dispatch({ type:'CAST_VOTE', currentVote })
        })
        .catch((err) => {
            dispatch({ type: 'CAST_VOTE_ERROR', err })
        })

    }
};



