export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        const profile = getState().firebase.profile 
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('projects').add(
            {
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createdAt: new Date()
            }
        )
        .then(() => {
            dispatch({ type:'CREATE_PROJECT', project: project })
        })
        .catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })

    }
};

export const updateTest = (test) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        // const profile = getState().firebase.profile
        // const authorId = getState().firebase.auth.uid;
        fireStore.collection('testCollection').doc('kKhfylp994YyMJXJNQvc')
        .set({test:test})
        .then(() => {
            dispatch({ type:'UPDATE_TEST', test: test })
        })
        .catch((err) => {
            dispatch({ type: 'UPDATE_TEST_ERROR', err })
        })

    }
}