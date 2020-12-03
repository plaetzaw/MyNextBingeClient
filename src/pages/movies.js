import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PopularMovies from '../components/popularMovies'
import { LOADING_DATA } from '../redux/actions/actionTypes'
import FullMovieCard from "../components/fullMovieCard"
// import NowPlayingMovies from '../components/nowplayingMovies'
// import TopRatedMovies from '../components/topratedMovies'
// import UpcomingMovies from '../components/upcomingMovies'
class Movies extends Component {
 render(){
let fullChecker = this.props.data.dataLoaded ? <FullMovieCard/> : <PopularMovies/> 
   return(
     <>
    {fullChecker}
    {/* <NowPlayingMovies/> */}
    {/* <TopRatedMovies/> */}
    {/* <UpcomingMovies/> */}
</>

   )
}
}

Movies.propTypes = {
    data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    data: state.data,
})



export default connect (mapStateToProps, null)(Movies)
