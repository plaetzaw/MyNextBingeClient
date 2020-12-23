import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PopularPeople from '../components/popularPeople'
import FullPersonCard from '../components/fullPeopleCard'

export class People extends Component {
  
    render() {
      let fullChecker = this.props.data.dataLoaded ? (<FullPersonCard/>) : (<PopularPeople/>)
      return (
      <>
      {fullChecker}
      {/* <PopularPeople/> */}
      </>
      )
    }
  }
      
People.propTypes = {
    data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    data: state.data,
})

const mapDispatchToProps = {
}

export default connect (mapStateToProps, mapDispatchToProps)(People)