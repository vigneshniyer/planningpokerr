const initState = {
    // 'name': '',
    // 'id': ''
}

const roomReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_ROOM':
            return {'id': action.room.id};
        case 'CREATE_ROOM_ERROR':
            return state;

        case 'JOIN_ROOM':
            return {'id': action.room.id};
        case 'JOIN_ROOM_ERROR':
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
         
        default:
            return state;
    }
}

export default roomReducer;