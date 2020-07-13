import { combineReducers } from 'redux';
import { blogReducer } from './blogReducer';
import { authReducer } from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  blog: blogReducer,
});
