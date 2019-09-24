import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

// const loadState = () => {
//     try {
//       const serializedState = localStorage.getItem('state');
//       if(serializedState === null) {
//         return undefined;
//       }
//       return JSON.parse(serializedState);
//     } catch (e) {
//       return undefined;
//     }
//   };
  
//   const saveState = (state) => {
//     try {
//       const serializedState = JSON.stringify(state);
//       localStorage.setItem('state', serializedState);
//     } catch (e) {
//       // Ignore write errors;
//     }
//   };
  
//   const persistedState = loadState();
  
  
  

const store = createStore(
    rootReducer, 
    // persistedState,
    compose (
        // store enhancers
        applyMiddleware(
            thunk.withExtraArgument({ getFirebase, getFirestore })
        ),
        reduxFirestore(fbConfig),
        reactReduxFirebase(
            fbConfig,
            { 
                useFirestoreForProfile: true, // to sync firestore 'users' collection to 'profile' attribute of firebase
                userProfile: 'users',
                attachAuthIsReady: true
            }
        )
    )
);

// store.subscribe(() => {
//   saveState(store.getState());
// });

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, 
        document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
