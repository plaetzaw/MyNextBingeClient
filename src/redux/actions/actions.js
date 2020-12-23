import axios from 'axios'
import jwtDecode from "jwt-decode";
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOGGED_IN, SNACKBAR_SUCCESS, 
  SNACKBAR_ERROR, SNACKBAR_CLEAR, POPULAR_MOVIES, NOW_PLAYING_MOVIES, UPCOMING_MOVIES, 
  TOP_RATED_MOVIES, POPULAR_SHOWS, TOP_RATED_SHOWS, AIRING_TODAY_SHOWS, POPULAR_PEOPLE, 
  SINGLE_MOVIE, SINGLE_MOVIE_RECOMMENDATIONS, SINGLE_MOVIE_CAST, SINGLE_MOVIE_VIDEOS,
SINGLE_MOVIE_WATCHPROVIDERS, SINGLE_SHOW, SINGLE_SHOW_CAST, SINGLE_SHOW_RECOMMENDATIONS,
EXIT_ITEM,
PERSON_CREDITS,
PERSON_DETAILS} from './actionTypes'

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
//Reset to Search
export const ExitFullInfo = () => (dispatch) => {
  dispatch({ type: EXIT_ITEM })
}

//Movie Components
export const GetPopularMovies =  () => async (dispatch) => {
  await axios.post("http://localhost:8080/popularMovies")
  .then((popularMovies) => {
    dispatch({ type: POPULAR_MOVIES, payload: popularMovies.data})
  })
}

// export const GetNowPlayingMovies =  () => async (dispatch) => {
//   await axios.post("http://localhost:8080/nowplayingMovies")
//   .then((nowplayingMovies) => {
//     dispatch({ type: NOW_PLAYING_MOVIES, payload: nowplayingMovies.data})
//   })
// }

// export const GetUpcomingMovies =  () => async (dispatch) => {
//   await axios.post("http://localhost:8080/upcomingMovies")
//   .then((upcomingMovies) => {
//     dispatch({ type: UPCOMING_MOVIES, payload: upcomingMovies.data})
//   })
// }

// export const GetTopRatedMovies =  () => async (dispatch) => {
//   await axios.post("http://localhost:8080/topratedMovies")
//   .then((topratedMovies) => {
//     dispatch({ type: TOP_RATED_MOVIES, payload: topratedMovies.data})
//   })
// }

//Full Movie Information
export const GetMovieInfo = (id) => async (dispatch) => {
  console.log("Action activated - checking for movie")
  console.log(id)
  await axios.post("http://localhost:8080/fullmovieInfo", id)
  .then((singleMovie) => {
    dispatch({ type: SINGLE_MOVIE, payload: singleMovie.data})
  })
  .catch((err) => console.log(err))
  await axios.post("http://localhost:8080/fullmovieRecommendations", id)
  .then((recommendations) => {
    dispatch({ type: SINGLE_MOVIE_RECOMMENDATIONS, payload: recommendations.data})
  })
  .catch((err) => console.log(err))
  await axios.post("http://localhost:8080/fullmovieCredits", id)
  .then((cast) => {
    dispatch({ type: SINGLE_MOVIE_CAST, payload: cast.data})
  })
  .catch((err) => console.log(err))
  await axios.post("http://localhost:8080/fullmovieVideos", id)
  .then((videos) => {
    dispatch({ type: SINGLE_MOVIE_VIDEOS, payload: videos.data})
  })
  .catch((err) => console.log(err))
  await axios.post("http://localhost:8080/fullmovieWatchProviders", id)
  .then((watchproviders) => {
    dispatch({ type: SINGLE_MOVIE_WATCHPROVIDERS, payload: watchproviders.data})
  })
  .catch((err) => console.log(err))
}

//Full TV Show Information
export const GetShowInfo = (id) => async (dispatch) => {
  console.log("Action activated - checking for tv show")
  console.log(id)
  await axios.post("http://localhost:8080/fullshowInfo", id)
  .then((singleShow) => {
    dispatch({ type: SINGLE_SHOW, payload: singleShow.data})
  })
  .catch((err) => console.log(err))
  await axios.post("http://localhost:8080/fullshowRecommendations", id)
  .then((recommendations) => {
    dispatch({ type: SINGLE_SHOW_RECOMMENDATIONS, payload: recommendations.data})
  })
  .catch((err) => console.log(err))
  await axios.post("http://localhost:8080/fullshowCredits", id)
  .then((cast) => {
    dispatch({ type: SINGLE_SHOW_CAST, payload: cast.data})
  })
}

// Full Person Info
export const GetPersonInfo = (id) => async (dispatch) => {
  console.log("Action activated - checking for person")
  console.log(id)
  await axios.post("http://localhost:8080/personInfo", id)
  .then((details) => {
    dispatch({ type: PERSON_DETAILS, payload: details.data})
  })
  .catch((err) => console.log(err))
  await axios.post("http://localhost:8080/personCredits", id)
  .then((credits) => {
    dispatch({ type: PERSON_CREDITS, payload: credits.data})
  })
}

// export const GetMoviesHome =  () => async (dispatch) => {
//   console.log("beginning chain")
//   await axios.post("http://localhost:8080/popularMovies")
//   .then((popularMovies) => {
//     dispatch({ type: POPULAR_MOVIES, payload: popularMovies.data})
//     console.log(popularMovies)
//   })
//   await axios.post("http://localhost:8080/nowplayingMovies")
//   .then((nowplayingMovies) => {
//     dispatch({ type: NOW_PLAYING_MOVIES, payload: nowplayingMovies.data})
//   })
//   await axios.post("http://localhost:8080/upcomingMovies")
//   .then((upcomingMovies) => {
//     dispatch({ type: UPCOMING_MOVIES, payload: upcomingMovies.data})
//   })
//   await axios.post("http://localhost:8080/topratedMovies")
//   .then((topratedMovies) => {
//     dispatch({ type: TOP_RATED_MOVIES, payload: topratedMovies.data})
//   })
// }

export const GetTVShowsHome =  () => async (dispatch) => {
  console.log("starting chain")
  await axios.post("http://localhost:8080/popularShows")
  .then((popularShows) => {
    dispatch({ type: POPULAR_SHOWS, payload: popularShows.data})
  })
  // await axios.post("http://localhost:8080/topratedShows")
  // .then((topratedShows) => {
  //   dispatch({ type: TOP_RATED_SHOWS, payload: topratedShows.data})
  // })
  // await axios.post("http://localhost:8080/airingtodayShows")
  // .then((airingtodayShows) => {
  //   dispatch({ type: AIRING_TODAY_SHOWS, payload: airingtodayShows.data})
  // })
}

  export const GetPeopleHome =  () => async (dispatch) => {
    console.log("starting chain")
    await axios.post("http://localhost:8080/popularPeople")
    .then((popularPeople) => {
      dispatch({ type: POPULAR_PEOPLE, payload: popularPeople.data})
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

