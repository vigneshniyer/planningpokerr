import authReducer from './authReducer';
import projectReducer from './projectReducer';
import userReducer from './userReducer';
import roomReducer from './roomReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers(
    {
        auth: authReducer,
        project: projectReducer,
        user: userReducer,
        room: roomReducer,
        firestore: firestoreReducer,
        firebase: firebaseReducer
    }
);

export default rootReducer;