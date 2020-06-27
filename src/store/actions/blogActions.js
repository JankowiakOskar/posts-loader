import axios from 'axios'



export const getPosts = (numPosts = 6) => {
  return (dispatch) => {

    dispatch( {type: 'LOADING_POSTS', loadingPosts: true})

    setTimeout(() => {
      axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=${numPosts}`)
      .then(res => {
        const postList = res.data.posts;
        dispatch({ 
          type: 'LOADED_POSTS', 
          postList,
          loadingPosts: false
        })
      }).catch(err => {
        dispatch({ type: 'LOADING_FAILED', err })
      })
    },500)
  }
}