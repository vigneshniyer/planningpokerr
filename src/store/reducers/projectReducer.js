const initState = {
    projects: [
        {id:'1', title:'help me find peach', content:'blah blah blah'},
        {id:'2', title:'help me find apple', content:'blah blah blah'},
        {id:'3', title:'help me find mango', content:'blah blah blah'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;
        case 'UPDATE_TEST':
            return state;
        case 'UPDATE_TEST_ERROR':
            return state;
        default:
            return state;
    }
}

export default projectReducer;