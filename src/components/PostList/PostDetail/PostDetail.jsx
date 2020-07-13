import React from 'react';
import './PostDetail.scss';
import moment from 'moment';
import { Col, Card } from 'react-bootstrap';

const PostDetail = (props) => {
  const { article, news } = props;
  let post = article || news;

  const descMarkUp = () => {
    return { __html: post.description };
  };

  return (
    <Col className="col" xs={12} sm={12} md={6} lg={6} xl={4}>
      <Card>
        <Card.Img variant="top" src={post.img} alt="article_img" />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-3 mt-3">
            {moment(post.datePublished).format('LLL')}
          </Card.Subtitle>
          <Card.Text dangerouslySetInnerHTML={descMarkUp()}></Card.Text>
        </Card.Body>
        <Card.Footer>
          <a href={post.articleURL} className="btn-article mr-3">
            Read article
          </a>

          <a href={post.authorURL} className="btn-author">
            Go to profile
          </a>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default PostDetail;
