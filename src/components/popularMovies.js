import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetPopularMovies } from "../redux/actions/actions"
import MiniCard from './miniCard'
import LinearProgress from '@material-ui/core/LinearProgress';
import '../utility/layout.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Movies extends Component {

    componentDidMount(){
        this.props.GetPopularMovies();
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
        const popularData = data.popularMovies.results
  
         
        let popular;
           if (this.props.data.dataLoaded === true){
            popular = popularData.map((cards) => {
                return <MiniCard
                title={cards.title}
                overview={cards.overview}
                poster_path={cards.poster_path}
                backdrop_path={cards.backdrop_path}
                />
            })
           } else {
               popular = 
               <>
               <LinearProgress/><h1>Loading</h1><LinearProgress/>
               </>
           }

          
return (
  <>
{/* <div className="movieDisplay"> */}
<h1>Popular Movies</h1>
<Carousel
  responsive={responsive}
>
{popular}
</Carousel>

{/* </div>  */}
</>
        )
    }
}

Movies.propTypes = {
    GetPopularMovies: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    data: state.data,
})

const mapDispatchToProps = {
    GetPopularMovies,
}

export default connect (mapStateToProps, mapDispatchToProps)(Movies)
