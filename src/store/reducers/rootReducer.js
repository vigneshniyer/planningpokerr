import authReducer from './authReducer';
import projectReducer from './projectReducer';
import userReducer from './userReducer';
import roomReducer from './roomReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

// const rootReducer = combineReducers(
//     {
//         auth: authReducer,
//         project: projectReducer,
//         user: userReducer,
//         room: roomReducer,
//         firestore: firestoreReducer,
//         firebase: firebaseReducer
//     }
// );

const appReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    user: userReducer,
    room: roomReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
 })
 
  const rootReducer = (state, action) => {
      
  if (action.type === 'CLEARSTORE') {
    
    state = undefined
  }
  console.log(state)
 
   return appReducer(state, action)
 }

export default rootReducer;