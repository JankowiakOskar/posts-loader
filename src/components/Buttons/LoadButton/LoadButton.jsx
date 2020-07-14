import React from 'react';
import './LoadButton.scss';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import { connect } from 'react-redux';
import { getPosts } from '../../../store/actions/blogActions';

const LoadButton = ({ posts, loadPosts, isLoadingPosts }) => {
  

  const handleClick = (muchPost) => {
    const loadedPosts = posts.length;
    const addPosts = loadedPosts + muchPost;
    loadPosts(addPosts);
  };
  
  const btnContent = isLoadingPosts ? <LoadingSpinner /> : 'Load more posts';


  return (
    <div className="container d-flex justify-content-center">
      <button
        type="button"
        className="btn-loader m-5"
        onClick={() => handleClick(6)}
        disabled={isLoadingPosts}
      >
        {btnContent}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.blog.postList,
    isLoadingPosts: state.blog.isLoading,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts: (num) => dispatch(getPosts(num)),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(LoadButton);
