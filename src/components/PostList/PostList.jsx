import React from 'react'
import './PostList.scss'
import PostDetail from './PostDetail/PostDetail'


const PostList = (props) => {
  const { posts } = props
  return ( 
    <div className="post-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {posts&& posts.map(post => {
        return (
          <PostDetail post={post} key={post.ID}/>
        )
      })}
    </div>
   );
}
   
    

 
export default PostList;