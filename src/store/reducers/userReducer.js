const initState = {
    // 'name': '',
    // 'id': ''
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            console.log("Action ------> ", action);
                let user  = action.userDetails; 
                return { ...state, ...user };
        case 'CREATE_USER_ERROR':
            return state;
        default:
            return state;
    }
}

export default userReducer;