import userReducer from './userReducer';
import roomReducer from './roomReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const appReducer = combineReducers({
    user: userReducer,
    room: roomReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
 })
 
  const rootReducer = (state, action) => {
      
  // if (action.type === 'LEAVE_ROOM') {
  //   state = undefined;
  //   state = {
  //     user:{
  //       clickedExit: true
  //     }
  //   }
  // } 
   return appReducer(state, action)
 }

export default rootReducer;