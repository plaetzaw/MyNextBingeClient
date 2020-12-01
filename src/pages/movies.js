import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PopularMovies from '../components/popularMovies'
import NowPlayingMovies from '../components/nowplayingMovies'
import TopRatedMovies from '../components/topratedMovies'
import UpcomingMovies from '../components/upcomingMovies'
class Movies extends Component {
 render(){
   return(
     <>
    <PopularMovies/>
    <NowPlayingMovies/>
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
