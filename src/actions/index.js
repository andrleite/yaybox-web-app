import axios from 'axios';

import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER
} from './types';

const AUTH_API_URL = 'http://localhost:3090';

export function loginUser({ email, password}) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${AUTH_API_URL}/signin`, { email, password})
      .then(response => {
        // Update state to indicate user is authendicated
        dispatch({ type: AUTH_USER});
        // Save the JWT token
        localStorage.setItem('token', response.data.token);
        window.location.href = 'http://console.yaybox.com.br:8081';
    })
    .catch(() => {
      dispatch(loginError('Credenciais inválidas'));
    });
  }
}

export function signupUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${AUTH_API_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        window.location.href = 'http://console.yaybox.com.br:8081';
      })
      .catch(error => dispatch(loginError(error.response.data.error)));
  }
}

export function loginError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}