const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: true,
  user: null,
  errors: {}
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "USER_LOADING":
      return { ...state, isLoading: true };

    case "USER_LOADED":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.user
      };

    case "LOGIN_SUCCESSFUL":
      localStorage.setItem("token", action.data.access);
      console.log(action.data)
      return {
        ...state,
        //...action.data,
        user: action.data.user,
        token: action.data.access,
        isAuthenticated: true,
        isLoading: false,
        errors: null
      };
    
    case 'REGISTRATION_SUCCESSFUL':
        localStorage.setItem("token", action.data.access);
        return {...state, 
          //...action.data, 
          user: action.data.user,
          token: action.data.access,
          isAuthenticated: true, 
          isLoading: false, 
          errors: null};
    

    case "AUTHENTICATION_ERROR":
    case "LOGIN_FAILED":
    case "LOGOUT_SUCCESSFUL":
      localStorage.removeItem("token");
      return {
        ...state,
        errors: action.data,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };

    default:
      return state;
  }
}
