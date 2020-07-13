import './FirstPage.scss';
import React from 'react'
import { connect } from 'react-redux';
import {getSignOutPosts} from '../../../store/actions/blogActions';
import Showcase from '../../Showcase/Showcase'
import Modal from '../../Modal/Modal'
import PostDetail from '../../PostList/PostDetail/PostDetail';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const FirstPage = (props) => {
const { loadPosts, newsList, isLoggedIn, loadingPosts } = props;
  
const handleClick = () => {
  loadPosts();
}


const articles = newsList.length ? (
  <div className="articles container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {newsList.map((news) => {return <PostDetail news={news} key={news.id}/>})}
  </div>
) : null

const switchBtn = !newsList.length ? (
<button className="read-btn" onClick={handleClick}>{loadingPosts ? <LoadingSpinner/> : ('Read some articles...')}</button>
) : (<Modal/>)

  return ( 
    <div className="firstPage-wrapper">
      <Showcase/>
      {!isLoggedIn && switchBtn}
      {!isLoggedIn && articles}
    </div>
   );
}


const mapStateToProps = (state) => {
  return {
    loadingPosts: state.blog.isLoading,
    newsList: state.blog.loggedOutNews,
    isLoggedIn: state.auth.isLoggedIn
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts: () => dispatch(getSignOutPosts())
  }
} 
 
export default connect(mapStateToProps,mapDispatchToProps)(FirstPage);