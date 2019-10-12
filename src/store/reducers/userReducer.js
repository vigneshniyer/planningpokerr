const initState = {
    clickedExit: false
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_USER':
                let user  = action.userDetails; 
                return { ...state, ...user, clickedExit: false};
        case 'CREATE_USER_ERROR':
            return state;
        case 'EXIT_USER': 
            return {...state, clickedExit:true, id:null, name:null}
        default:
            return state;
    }
}

export default userReducer;