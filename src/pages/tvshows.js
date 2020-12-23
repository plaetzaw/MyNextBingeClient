import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetTVShowsHome } from "../redux/actions/actions"
import PopularShow from '../components/popularShows'
import FullShowCard from '../components/fullShowCard'


export class TVShows extends Component {

    render() {   
      let fullChecker = this.props.data.dataLoaded ? <FullShowCard/> : <PopularShow/>   
      return (
        <>
        {fullChecker}
        {/* <PopularShow/> */}
        {/* <FullShowCard/>  */}
        </>
      )
    }
}

TVShows.propTypes = {
    GetTVShowsHome: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    data: state.data,
})

const mapDispatchToProps = {
    GetTVShowsHome,
}

export default connect (mapStateToProps, mapDispatchToProps)(TVShows)
