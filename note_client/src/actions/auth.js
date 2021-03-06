export const loadUser = () => {
  return (dispatch, getState) => {
    dispatch({ type: "USER_LOADING" });

    const token = getState().auth.token;
   
    let headers = {
      "Content-Type": "application/json"
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return fetch("http://127.0.0.1:8000/api/v1/auth/users/me/", { headers })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: "USER_LOADED", user: res.data });
          return res.data;
        } else if (res.status >= 400 && res.status < 500) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        }
      });
  };
};

export const login = (email, password) => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({ email, password });

    return fetch("http://127.0.0.1:8000/api/v1/auth/login/", {
      headers,
      body,
      method: "POST"
    })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: "LOGIN_SUCCESSFUL", data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        } else {
          dispatch({ type: "LOGIN_FAILED", data: res.data });
          throw res.data;
        }
      });
  };
};

export const register = (email, password) => {
  return (dispatch, getState) => {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify({ email, password });

    return fetch("http://127.0.0.1:8000/api/v1/auth/register/", {
      headers,
      body,
      method: "POST"
    })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return { status: res.status, data };
          });
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: "REGISTRATION_SUCCESSFUL", data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({ type: "AUTHENTICATION_ERROR", data: res.data });
          throw res.data;
        } else {
          dispatch({ type: "REGISTRATION_FAILED", data: res.data });
          throw res.data;
        }
      });
  };
};


export const logout = () => {
  return {
    type: 'LOGOUT_SUCCESSFUL'
  }
}


  