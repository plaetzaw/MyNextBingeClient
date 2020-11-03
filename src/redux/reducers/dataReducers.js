const { GET_FAVORITE_MOVIES, GET_FAVORITE_TVSHOWS, GET_FAVORITE_ACTORS, SET_TO_FAVORITE_MOVIES, SET_TO_FAVORITE_TVSHOWS, SET_TO_FAVORITE_ACTORS, SEARCH_BY_GENRE, SEARCH_BY_TITLE } = require("../actions/actionTypes")

const initialState = {
    loadingData: true,
    searchData: false,
    searchedMedia: [],
    favoriteMovies: [],
    favoriteTVshows: [],
    favoriteActors: [],
    genre: [],
    uploads: [],
}

const dataReducers = (state = initialState, action) => {
    switch (action.type) {
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