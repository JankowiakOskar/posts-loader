import React from 'react';
import Loader from 'react-loader-spinner';
import './LoadingSpinner.scss';
import { connect } from 'react-redux';

const LoadingSpinner = ({ postsLoaded }) => {

  
  return (
    <Loader
      className="spinner"
      type="TailSpin"
      color={postsLoaded ? 'white' : '#D93240'}
      width={30}
      height={30}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    postsLoaded: state.blog.postList.length,
  };
};

export default connect(mapStateToProps, null)(LoadingSpinner);
