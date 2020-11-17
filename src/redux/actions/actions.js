import axios from 'axios'
import jwtDecode from "jwt-decode";
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOGGED_IN, SNACKBAR_SUCCESS, SNACKBAR_ERROR, SNACKBAR_CLEAR, POPULAR_MOVIES, NOW_PLAYING_MOVIES, UPCOMING_MOVIES, TOP_RATED_MOVIES, LOADING_DATA} from './actionTypes'

// Set JWT Token
export const setAuthorizationHeader = (token) => {
    const JWToken = `Bearer ${token}`;
    localStorage.setItem("JWToken", JWToken);
    axios.defaults.headers.common["Authorization"] = JWToken;
  };

// Login
export const LoginUser = (userData) => (dispatch) => {
  console.log("Beginning login process");
  axios
    .post("localhost:8080/login", userData)
    .then((res) => {
      if (res.status === 200) {
        setAuthorizationHeader(res.data.accessToken);
        dispatch({ type: SET_AUTHENTICATED });
        let decodedToken = jwtDecode(res.data.token);
        dispatch({ type: LOGGED_IN, payload: decodedToken });
        dispatch({
          type: SNACKBAR_SUCCESS,
          payload: "You have been logged in",
        });
        //redirect to /picker
      } else {
        dispatch({
          type: SNACKBAR_ERROR,
          payload:
            "Your username and password were not correct. Please try again",
        });
      }
    });
};

// Logout
export const LogoutUser = () => (dispatch) => {
  console.log("Beginning logout process");
  localStorage.removeItem("JWToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  dispatch({ type: SNACKBAR_SUCCESS, payload: "User logged out" });
};

// Register
export const RegisterUser = (newUserData) => (dispatch) => {
  console.log("Beginning new user registration");
  axios
    .post("localhost:8080/register", newUserData)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: SNACKBAR_SUCCESS,
          payload: "User registered! You may now login",
        });
      } else {
        dispatch({ type: SNACKBAR_ERROR, payload: "Error, please try again" });
      }
    });
};

export const GetMoviesHome =  () => async (dispatch) => {
  console.log("beginning chain")
  await axios.post("http://localhost:8080/popularMovies")
  .then((popularMovies) => {
    dispatch({ type: POPULAR_MOVIES, payload: popularMovies.data})
    console.log(popularMovies)
  })
  await axios.post("http://localhost:8080/nowplayingMovies")
  .then((nowplayingMovies) => {
    dispatch({ type: NOW_PLAYING_MOVIES, payload: nowplayingMovies.data})
  })
  await axios.post("http://localhost:8080/upcomingMovies")
  .then((upcomingMovies) => {
    dispatch({ type: UPCOMING_MOVIES, payload: upcomingMovies.data})
  })
  await axios.post("http://localhost:8080/topratedMovies")
  .then((topratedMovies) => {
    dispatch({ type: TOP_RATED_MOVIES, payload: topratedMovies.data})
  })
}


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