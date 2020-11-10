import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetMoviesHome } from "../redux/actions/actions"
import MiniCard from '../components/miniCard'
import '../utility/layout.css'
// import { Carousel } from 'react-responsive-carousel';

class Movies extends Component {

    componentDidMount(){
        this.props.GetMoviesHome();
    }
    


    render() {
        const { data } = this.props
        const hotData = data.popularMovies.results

        const hotMap = hotData.map((cards) => {
            return <MiniCard
            name={cards.name}
            overview={cards.overview}
            poster_path={cards.poster_path}
            backdrop_path={cards.backdrop_path}
            />
        })

            // <li><h3>{cards.title}</h3>
            // <br/>
            // {cards.overview}
            // </li>
             
      

        const hotMarkup = this.props.data.loadingData ? (<><h1>{hotMap}</h1></>) : (<>butts</>)


      

                 
     

   

        return (
            
            <div className="movieDisplay">
                {hotMarkup}
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
