import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetTVShowsHome } from "../redux/actions/actions"
import MiniCard from '../components/miniCardShows'
import LinearProgress from '@material-ui/core/LinearProgress';
// import '../utility/layout.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export class TVShows extends Component {

    componentDidMount(){
        this.props.GetTVShowsHome();
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

          const { data } = this.props
          const hotData = data.popularShows.results
          const topRatedData = data.topratedShows.results
          const airingtodayData = data.airingtodayShows.results

          let hotMap;
           if (this.props.data.dataLoaded === true){
            hotMap = hotData.map((cards) => {
                return <MiniCard
                name={cards.name}
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

           let airingToday;
           if (this.props.data.dataLoaded === true){
            airingToday = airingtodayData.map((cards) => {
                return <MiniCard
                title={cards.title}
                overview={cards.overview}
                poster_path={cards.poster_path}
                backdrop_path={cards.backdrop_path}
                />
            })
           } else {
               airingToday = 
               <>
               <LinearProgress/><h1>Loading</h1><LinearProgress/>
               </>
           }

          
        return (
            <div>
            <h1>Hot Shows</h1>
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
           {hotMap}
          </Carousel> 

          <h1>Top Rated Shows</h1>
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
           {topRated}
          </Carousel>  

           <h1>Airing Today</h1>
            <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
           {airingToday}
          </Carousel>         
            </div>
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
