import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetMoviesHome } from "../redux/actions/actions"
// import Minicard from '../components/miniCard'
// import { Carousel } from 'react-responsive-carousel';

class Movies extends Component {

    componentDidMount(){
        this.props.GetMoviesHome();
    }
    


    render() {
        const { data } = this.props
        const hotData = data.popularMovies.results

        // const hotMarkup = hotData.map((cards) => {
        //     return <li>{cards.title}</li>
        // })

        const hotChecker = this.props.data.loadingData ? (<><h1>LOADING</h1></>) : (<>Test</>)


      

                     //     return <Minicard
            //     name={cards.name}
            //     />
     

   

        return (
            <div>
                {hotChecker}
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
