const initState = {
    loggedIn: false
}

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            console.log("Action ------> ", action);
                let user  = action.userDetails; 
                return { ...state, ...user, loggedIn:true };
        case 'CREATE_USER_ERROR':
            return state;
        case 'CLEAR_USER':
            console.log("Sampling user redux")
            return {...state, id:'', name:''}
        default:
            return state;
    }
}

export default userReducer;