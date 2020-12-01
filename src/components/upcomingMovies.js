import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetUpcomingMovies } from "../redux/actions/actions"
import MiniCard from './miniCard'
import LinearProgress from '@material-ui/core/LinearProgress';
// import '../utility/layout.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Movies extends Component {

    componentDidMount(){
        this.props.GetUpcomingMovies();
    }
    
    render() {
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1 // optional, default to 1.
            }
          };

        console.log(this.props.data.dataLoaded)
        const { data } = this.props
        const upcomingData = data.upcomingMovies.results
         
     

           let upcoming;
           if (this.props.data.upcomingLoaded === true){
            upcoming = upcomingData.map((cards) => {
                return <MiniCard
                title={cards.title}
                overview={cards.overview}
                poster_path={cards.poster_path}
                backdrop_path={cards.backdrop_path}
                />
            })
           } else {
               upcoming = 
               <>
               <LinearProgress/><h1>Loading</h1><LinearProgress/>
               </>
           }


return (
<>
<h1>Upcoming</h1>
<Carousel
  responsive={responsive}
>
{upcoming}
</Carousel>
</> 
        )
    }
}

Movies.propTypes = {
    GetUpcomingMovies: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    data: state.data,
})

const mapDispatchToProps = {
    GetUpcomingMovies,
}

export default connect (mapStateToProps, mapDispatchToProps)(Movies)
