import React from 'react'
import './PostDetail.scss'
import moment from 'moment'

const PostDetail = ({ post }) => {

  const postDate = post.modified;

  const formatDesc = (text) => {
    const regX = /(<([^>]+)>)/ig;
    const newDesc = text.replace(regX, '');

    return newDesc

  }
  return (
        <div className="col pt-3">
          <div className="card">
            <img src={post.featured_image} className="card-img-top" alt={post.slug}/>
            <div className="card-body">
              <div className="title-ctn">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle text-muted mb-3 mt-3">{moment(postDate).format('LLL')}</h6>
              </div>
              <div className="desc">
                <p className="card-text">{formatDesc(post.excerpt)}</p>
              </div>
              <div className="btns-ctn">
                <a href={post.URL} className="btn btn-primary btn-sm mr-3" type="button">Go to Article</a>
                <a href={post.author.profile_URL} className="btn btn-secondary btn-sm" type="button">About Author</a>
              </div>
            </div>
          </div>
        </div> 
   );
}


 
export default PostDetail;