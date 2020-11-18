import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetPeopleHome } from "../redux/actions/actions"
import MiniCard from '../components/miniCard'
import LinearProgress from '@material-ui/core/LinearProgress';
// import '../utility/layout.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export class People extends Component {
    componentDidMount(){
        this.props.GetPeopleHome();
    }
    render() {

    
    return(
        <></>
    )

    }
}

People.propTypes = {
    GetPeopleHome: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    data: state.data,
})

const mapDispatchToProps = {
    GetPeopleHome,
}

export default connect (mapStateToProps, mapDispatchToProps)(People)