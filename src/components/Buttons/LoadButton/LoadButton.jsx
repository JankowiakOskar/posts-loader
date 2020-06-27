import React from 'react';
import './LoadButton.scss';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { connect } from 'react-redux';

const LoadButton = ({ posts, loadPosts, isLoadingPosts }) => {
  const postsLoading = isLoadingPosts;

  const handleClick = (muchPost) => {
    const loadedPosts = posts.length;
    const addPosts = loadedPosts + muchPost;
    loadPosts(addPosts)
  }

  const btnContent = postsLoading ? <LoadingSpinner/> : ('Load More Posts')

  return ( 
    <div className="container d-flex justify-content-center">
      <button type="button" className="btn-loader btn btn-success m-5" onClick={() => handleClick(6)} disabled={postsLoading}>{btnContent}</button>
    </div>
   );
}


const mapStateToProps = (state) => {
  return {
    isLoadingPosts: state.isLoading
  }
}
 
export default connect(mapStateToProps,null)(LoadButton);