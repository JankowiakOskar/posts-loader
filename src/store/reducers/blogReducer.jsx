
const posts = {
  postList: [],
  loadingFailed: false,
  isLoading: false
}


export const blogReducer = (state = posts, action) => {
  switch (action.type) {
    case 'LOADING_POSTS':
      console.log('post loading')
      return state = {
        ...state,
        isLoading: action.loadingPosts
      }
    case 'LOADED_POSTS':
      console.log('posts loaded')
      return state = {
        loadingFailed: false,
        postList: [
          ...action.postList
        ],
        isLoading: action.loadingPosts
      }
    case 'LOADING FAILED':
      console.log('loading failed')
      return state = {
        ...state,
        loadingFailed: true
      }
    default:
      return state
  }
}