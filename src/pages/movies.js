import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PopularMovies from '../components/popularMovies'
class Movies extends Component {
 render(){
   return(
    <PopularMovies/>

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
