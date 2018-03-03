import qs from 'qs';

//const API_URL = 'https://improv-api.herokuapp.com';
const API_URL = 'http://localhost:5000';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// ------------------------------------
// Action creators
const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
    isAuthenticated: true
  };
};

const loginFailure = errmessage => {
  return {
    type: LOGIN_FAILURE,
    payload: errmessage,
    isAuthenticated: false
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    isAuthenticated: false
  };
};

export const loginUser = (username, password) => {
  const formParams = qs.stringify({
    password,
    email: username
  });
  return dispatch => {
    return fetch(`${API_URL}/authenticate`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formParams
    })
      .then(response => {
        if (!response.ok) throw new Error('Unable to fetch');
        return response.json();
      })
      .then(user => dispatch(loginSuccess(user)))
      .catch(error => dispatch(loginFailure(error.message)));
  };
};

export const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    dispatch(logoutSuccess());
  };
};

// ------------------------------------
// Selectors

export const getUser = state => state.login.user;
export const isAuthenticated = state => state.login.isAuthenticated;

const initialState = {
  isAuthenticated: false,
  loggingIn: false,
  user: null
};

export default function reducer(state = initialState, action = {}) {
  return state;
}
