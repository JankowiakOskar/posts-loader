export const signIn = (userData) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();

    dispatch({ type: 'LOGGING_START', isLogging: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(userData.emailSignIn, userData.passwordSignIn)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', error: err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'SIGNOUT_ERROR', signOutError: err });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    dispatch({ type: 'LOGGING_START', isLogging: true });

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((response) => {
        return firestore
          .collection('users')
          .doc(response.user.uid)
          .set({
            firstname: newUser.firstName,
            lastname: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', signUpError: err });
      });
  };
};


export const removeAuthError = () => {
  return { type: 'REMOVE_AUTHERROR'}
}
