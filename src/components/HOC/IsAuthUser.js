import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const RouterGuard = (WrappedComponent) => {
  const HOCComponent = (props) => {
    const { userFirebaseID, isLoggedIn } = props;
    if (!userFirebaseID && !isLoggedIn) {
      return <Redirect to="/signin" />;
    } else {
      return <WrappedComponent {...props}/>;
    }
  };

  return connect(mapStateToProps)(HOCComponent);
};


const mapStateToProps = (state) => {
  return {
    userFirebaseID: state.firebase.auth.uid,
    isLoggedIn: state.auth.isLoggedIn
  };
};






