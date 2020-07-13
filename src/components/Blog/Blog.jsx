import React, { Component } from 'react';
import './Blog.scss';
import PostList from '../PostList/PostList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getPosts } from '../../store/actions/blogActions';
import { Container } from 'react-bootstrap';
import {RouterGuard } from '../../components/HOC/IsAuthUser';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { posts} = this.props;
    return (
      <Container className="board">
        <PostList posts={posts} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.blog.postList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts: (num) => dispatch(getPosts(num)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  RouterGuard
)(Board);
