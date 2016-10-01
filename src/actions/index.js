import axios from 'axios';

import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  SEND_MAIL
} from './types';


const AUTH_API_URL = 'http://localhost:3090';
const MAIL_API_URL = 'https://api:key-0189640e896fd938f5c7e97096e5533d@api.mailgun.net/v3/sandbox1ad9f3dde56c4294bccda0297af80664.mailgun.org/messages';

export function loginUser({ email, password}) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${AUTH_API_URL}/signin`, { email, password})
      .then(response => {
        // Update state to indicate user is authendicated
        dispatch({ type: AUTH_USER});
        // Save the JWT token
        window.sessionStorage.setItem('token', response.data.token);
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
        window.sessionStorage.setItem('token', response.data.token);
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

export function sendMail() {
  return function(dispatch) {
    axios.post(`${MAIL_API_URL}`, { from: 'Andre <andre.leite@totvs.com.br>', to: 'Andre <andrleite@gmail.com>', 
      subject: 'Hello From React', text: 'This is a test email using reactjs'})
      .then(response => {
        dispatch({ type: SEND_MAIL 
        });
      })
    } 
  }