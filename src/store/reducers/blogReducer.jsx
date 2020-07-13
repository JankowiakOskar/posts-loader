const posts = {
  postList: [],
  loggedOutNews: [],
  loadingFailed: false,
  isLoading: false,
};

export const blogReducer = (state = posts, action) => {
  switch (action.type) {
    case 'LOADING_POSTS':
      console.log('post loading');
      return {
        ...state,
        isLoading: action.loadingPosts,
      };
    case 'LOADED_POSTS':
      console.log('posts loaded');
      return {
        ...state,
        postList: [...action.postList],
        isLoading: action.loadingPosts,
      };
    case 'LOADED_SIGNOUT_POSTS': 
      return {
        ...state, 
        loggedOutNews: !state.postList.length ? (action.postList) : (state.postList),
        isLoading: action.loadingPosts
      }
    case 'LOADING_POSTS_FAILED':
      console.log('loading failed');
      return {
        ...state,
        loadingFailed: true,
      };
    case 'DELETE_ALL_DATA':
      return {
        ...state,
        postList: [],
        loggedOutNews: []
      }
    default:
      return state;
  }
};
