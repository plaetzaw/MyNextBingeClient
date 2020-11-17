import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetMoviesHome } from "../redux/actions/actions"
import MiniCard from '../components/miniCard'
import LinearProgress from '@material-ui/core/LinearProgress';
// import '../utility/layout.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class Movies extends Component {

    componentDidMount(){
        this.props.GetMoviesHome();
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
        const hotData = data.popularMovies.results
        const nowPlayingData = data.nowplayingMovies.results
        const topRatedData = data.topratedMovies.results
        const upcomingData = data.upcomingMovies.results
         
        let hotMap;
           if (this.props.data.dataLoaded === true){
            hotMap = hotData.map((cards) => {
                return <MiniCard
                title={cards.title}
                overview={cards.overview}
                poster_path={cards.poster_path}
                backdrop_path={cards.backdrop_path}
                />
            })
           } else {
               hotMap = 
               <>
               <LinearProgress/><h1>Loading</h1><LinearProgress/>
               </>
           }

           let topRated;
           if (this.props.data.dataLoaded === true){
            topRated = topRatedData.map((cards) => {
                return <MiniCard
                title={cards.title}
                overview={cards.overview}
                poster_path={cards.poster_path}
                backdrop_path={cards.backdrop_path}
                />
            })
           } else {
               topRated = 
               <>
               <LinearProgress/><h1>Loading</h1><LinearProgress/>
               </>
           }

           let nowPlaying;
           if (this.props.data.dataLoaded === true){
            nowPlaying = nowPlayingData.map((cards) => {
                return <MiniCard
                title={cards.title}
                overview={cards.overview}
                poster_path={cards.poster_path}
                backdrop_path={cards.backdrop_path}
                />
            })
           } else {
               nowPlaying = 
               <>
               <LinearProgress/><h1>Loading</h1><LinearProgress/>
               </>
           }

           let upcoming;
           if (this.props.data.dataLoaded === true){
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

        // const hotMarkup = !this.props.data.dataLoaded ? (<><LinearProgress/><h1>Loading</h1><LinearProgress/></>) : (<><h1>{hotMap}</h1></>)

return (
<>
<h1>Hot Movies</h1>
<Carousel
  responsive={responsive}
>
{hotMap}
</Carousel>
<h1>Movies Now Playing!</h1>
<Carousel
  responsive={responsive}
>
{nowPlaying}
</Carousel>
<h1>Top Rated</h1>
<Carousel
  responsive={responsive}
>
{topRated}
</Carousel>
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
