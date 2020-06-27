import React, { Component } from 'react'
import './Blog.scss'
import PostList from '../PostList/PostList'
import LoadButton from '../Buttons/LoadButton/LoadButton'
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/blogActions'


class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.loadPosts();
  }


  render() {
    const {loadPosts, posts} = this.props;
    return ( 
      <div className="board container">
        <PostList posts={posts}/>
        {posts.length && <LoadButton posts={posts} loadPosts={loadPosts}/>}
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postList,
    isLoadingFailed: state.loadingFailed,
    isLoadingPosts: state.isLoading,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts: (num) => dispatch(getPosts(num))
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Board);