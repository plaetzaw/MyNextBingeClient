import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetMoviesHome } from "../redux/actions/actions"
import { Carousel } from 'react-responsive-carousel';

export class Movies extends Component {

    componentDidMount(){
        console.log("starting? ")
        this.props.GetMoviesHome();
    }
    


    render() {
        const { data } = this.props
        const hotMarkup = data
        console.log(hotMarkup)

        return (
            <div>
                hello
                whirl
            </div>
        )
    }
}

Movies.propTypes = {
    GetMoviesHome: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    data: state.data,
})

const mapDispatchToProps = {
    GetMoviesHome,
}

export default connect (mapStateToProps, mapDispatchToProps)(Movies)
