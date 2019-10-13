const initState = {
    
}

const roomReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_ROOM':{
            return {'id': action.room.id};
        }
        case 'CREATE_ROOM_ERROR':
            return state;

        case 'JOIN_ROOM':
            return {'id': action.room.id};
        case 'JOIN_ROOM_ERROR':
            return { ...state, invalidRoom: true };
        
        case 'EXIT_ROOM':
            return {...state, id:null}
        case 'LEAVE_ROOM_ERROR':
            return state;

        case 'TOGGLE_ROUND':
            return state;
        case 'TOGGLE_ROUND_ERROR':
            return state;

        case 'CAST_VOTE':
            // return {...state, 'currentVote': action.currentVote.vote};
            return state;
        case 'CAST_VOTE_ERROR':
            return state;

        case 'READ_MESSAGE':
            return state;
        case 'READ_MESSAGE_ERROR':
            return state;
         
        default:
            return state;
    }
}

export default roomReducer;