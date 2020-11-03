const { GET_FAVORITE_MOVIES, GET_FAVORITE_TVSHOWS, GET_FAVORITE_ACTORS } = require("../../../../../../../../../Client/src/redux/actions/actionTypes")

const initialState = {
    loadingData: true,
    searchData: false,
    searchedMovies: [],
    searchedTVshows: [],
    searchedActors: [],
    favoriteMovies: [],
    favoriteTVshows: [],
    favoriteActors: [],
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
        
    }
}