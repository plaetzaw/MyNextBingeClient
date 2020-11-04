import axios from 'axios'
import { SNACKBAR_SUCCESS, SNACKBAR_ERROR, SNACKBAR_CLEAR} from './actionTypes'

// Set JWT Token
export const setAuthorizationHeader = (token) => {
    const JWToken = `Bearer ${token}`;
    localStorage.setItem("JWToken", JWToken);
    axios.defaults.headers.common["Authorization"] = JWToken;
  };

//SnackbarSuccess
export const SnackbarSuccess = (message) => (dispatch) => {
  dispatch({ type: SNACKBAR_SUCCESS, payload: message.data });
};

//SnackbarError
export const SnackbarError = (message) => (dispatch) => {
  dispatch({ type: SNACKBAR_ERROR, payload: message.data });
};

//SnackbarClear
export const SnackbarClear = (dispatch) => {
  dispatch({ type: SNACKBAR_CLEAR });
};