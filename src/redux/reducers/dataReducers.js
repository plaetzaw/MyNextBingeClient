const { GET_FAVORITE_MOVIES, 
        GET_FAVORITE_TVSHOWS, 
        GET_FAVORITE_ACTORS, 
        SET_TO_FAVORITE_MOVIES, 
        SET_TO_FAVORITE_TVSHOWS, 
        SET_TO_FAVORITE_ACTORS, 
        SEARCH_BY_GENRE, 
        SEARCH_BY_TITLE,
        POPULAR_MOVIES,
        NOW_PLAYING_MOVIES,
        UPCOMING_MOVIES,
        TOP_RATED_MOVIES } = require("../actions/actionTypes")

const initialState = {
    loadingData: false,
    dataLoaded: false,
    searchedMedia: [],
    popularMovies: [],
    nowplayingMovies: [],
    topratedMovies: [],
    upcomingMovies: [],
    favoriteMovies: [],
    favoriteTVshows: [],
    favoriteActors: [],
    genre: [],
    uploads: [],
}

const dataReducers = (state = initialState, action) => {
    switch (action.type) {
        case POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.payload,
                
            }
        case NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowplayingMovies: action.payload
            }
        case UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: action.payload
            }
        case TOP_RATED_MOVIES:
            return {
                ...state,
                topratedMovies: action.payload,
                dataLoaded: true,
            }
        case GET_FAVORITE_MOVIES: 
        return {
            ...state,
            loadingData: false,
            favoriteMovies: action.payload
        }
        case GET_FAVORITE_TVSHOWS:
        return {
            ...state,
            loadingData: false,
            favoriteTVshows: action.payload
        }
        case GET_FAVORITE_ACTORS: 
        return {
            ...state,
            loadingData: false,
            favoriteActors: action.payload
        }
        case SET_TO_FAVORITE_MOVIES: 
        return {
            ...state,
            uploads: action.payload
        }
        case SET_TO_FAVORITE_TVSHOWS:
        return {
            ...state,
            uploads: action.payload
        }
        case SET_TO_FAVORITE_ACTORS:
        return {
            ...state,
            uploads: action.payload
        }
        case SEARCH_BY_GENRE:
        return {
            ...state,
            genre: action.payload,
            searchedMedia: action.payload
        }
        case SEARCH_BY_TITLE:
        return {
            ...state,
            searchedMedia: action.payload
        }    
        default:
            return state;

    }
}

export default dataReducers;