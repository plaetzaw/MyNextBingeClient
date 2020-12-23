import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PopularPeople from '../components/popularPeople'

export class People extends Component {
  
    render() {
      return (
      <>
      <PopularPeople/>
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