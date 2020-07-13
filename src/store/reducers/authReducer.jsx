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
      console.log('login success');
      return {
        ...state,
        authError: null,
        isLoggedIn: true,
      }
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: action.error,
        isLogging: false,
        isLoggedIn: false,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('signout sucess');
      return {
        ...state,
        authError: null,
        isLogging: false,
        isLoggedIn: false,
      }
    case 'SIGNOUT_ERROR':
      console.log('signout error');
      return {
        ...state,
        authError: action.signOutError,
        isLogging: false,
        isLoggedIn: true,
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success')
      return {
        ...state,
        authError: null,
        isLoggedIn: false,
      }
    case 'SIGNUP_ERROR':
      console.log('signup error');
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
