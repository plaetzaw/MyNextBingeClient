import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { GetPeopleHome } from "../redux/actions/actions"
import PeopleCard from '../components/miniCardPeople'
import LinearProgress from '@material-ui/core/LinearProgress';
// import '../utility/layout.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export class People extends Component {
    componentDidMount(){
        console.log("executing action")
        this.props.GetPeopleHome();
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
          const peopleData = data.popularPeople.results

          let people;
           if (this.props.data.dataLoaded === true){
            people = peopleData.map((cards) => {
                return <PeopleCard
                name={cards.name}
                profile_path={cards.profile_path}
                adult={cards.adult}
                known_for={cards.known_for}
                gender={cards.gender}
                />
            })
           } else {
               people = 
               <>
               <LinearProgress/><h1>Loading</h1><LinearProgress/>
               </>
           }
    
    return(
        <><Carousel
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
       {people}
      </Carousel> </>
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