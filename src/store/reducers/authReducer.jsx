const initState = {
  authError: null,
  isLogging: false,
  isLoggedIn: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGGING_START': 
    return {
      ...state,
      isLogging: action.isLogging
    }
    case 'LOGGING_END': {
      return {
        ...state,
        isLogging: false
      }
    }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
        isLoggedIn: true,
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.error,
        isLogging: false,
        isLoggedIn: false,
      };
    case 'SIGNOUT_SUCCESS':
      return {
        ...state,
        authError: null,
        isLogging: false,
        isLoggedIn: false,
      }
    case 'SIGNOUT_ERROR':
      return {
        ...state,
        authError: action.signOutError,
        isLogging: false,
        isLoggedIn: true,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null,
        isLoggedIn: false,
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.signUpError,
        isLogging: false,
        isLoggedIn: false,
      }
    case 'REMOVE_AUTHERROR': 
    return {
      ...state,
      authError: false,
    }
    default:
      return state;
  }
};
