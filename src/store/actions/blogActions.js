import axios from 'axios';

const APIkey = 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number='

export const getPosts = (numPosts = 6) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS', loadingPosts: true });

    setTimeout(() => {
      axios
        .get(
          `${APIkey}${numPosts}`,
        )
        .then((res) => {
          const articleList = res.data.posts;
          const newArticleList  = articleList.map(article => {
           return  {
              id: article.ID,
              title: article.title,
              description: article.excerpt,
              img: article.featured_image,
              datePublished: article.date,
              authorURL: article.author.profile_URL,
              articleURL: article.URL,
            }
          })
          dispatch({
            type: 'LOADED_POSTS',
            postList: newArticleList,
            loadingPosts: false,
          });
        })
        .catch((err) => {
          dispatch({ type: 'LOADING_POSTS_FAILED', err });
        });
    }, 500);
  };
};


export const getSignOutPosts = (numPosts = 6) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS', loadingPosts: true});
    setTimeout(() => {
      axios
        .get(
          `${APIkey}${numPosts}`,
        )
        .then((res) => {
          const articleList = res.data.posts;
          const newArticleList  = articleList.map(article => {
           return  {
              id: article.ID,
              title: article.title,
              description: article.excerpt,
              img: article.featured_image,
              datePublished: article.date,
              authorURL: article.author.profile_URL,
              articleURL: article.URL,
            }
          })
          dispatch({
            type: 'LOADED_SIGNOUT_POSTS',
            postList: newArticleList,
            loadingPosts: false,
          });
        })
        .catch((err) => {
          dispatch({ type: 'LOADING_POSTS_FAILED', err });
        });
    }, 500);
  }
}


export const deleteLoadedPosts = () => {
  return { type: 'DELETE_ALL_DATA'}
}
