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
        TOP_RATED_MOVIES,
        POPULAR_SHOWS,
        TOP_RATED_SHOWS,
        AIRING_TODAY_SHOWS, 
        POPULAR_PEOPLE} = require("../actions/actionTypes")

const initialState = {
    loadingData: false,
    dataLoaded: false,
    searchedMedia: [],
    popularMovies: [],
    popularLoaded: false,
    nowplayingMovies: [],
    nowplayingLoaded: false,
    topratedMovies: [],
    topratedLoaded: false,
    upcomingMovies: [],
    upcomingLoaded: false,
    popularShows: [],
    topratedShows: [],
    airingtodayShows: [],
    popularPeople: [],
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
                popularLoaded: true,

                
            }
        case NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowplayingMovies: action.payload,
                nowplayingLoaded: true,
            }
        case UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: action.payload,
                upcomingLoaded: true,
            }
        case TOP_RATED_MOVIES:
            return {
                ...state,
                topratedMovies: action.payload,
                topratedLoaded: true,
            }
        case POPULAR_SHOWS:
            return {
                ...state,
                popularShows: action.payload,
            }
        case TOP_RATED_SHOWS:
            return {
                ...state,
                topratedShows: action.payload,
            }
        case AIRING_TODAY_SHOWS:
            return {
                ...state,
                airingtodayShows: action.payload,
                dataLoaded: true,
            }
        case POPULAR_PEOPLE:
            return {
                ...state,
                popularPeople: action.payload,
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