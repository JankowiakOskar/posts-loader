import React from 'react';
import './PostList.scss';
import PostDetail from './PostDetail/PostDetail';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Container, Row } from 'react-bootstrap';
import LoadButton from '../Buttons/LoadButton/LoadButton';

const PostList = (props) => {
  const { posts } = props;
  
  let postList = posts.length ? (
    posts.map((article) => {
      return <PostDetail article={article} key={article.id} />;
    })
  ) : (
      <LoadingSpinner/>
  );

  return (
    <Container className="postlist-ctn" fluid >
      <Row>
          {postList}
          {posts.length && <LoadButton/>}
      </Row>
    </Container>
  )
};

export default PostList;
