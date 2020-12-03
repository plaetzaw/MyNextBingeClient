import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { useHistory } from "react-router-dom";
import {Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core'
// import { Button } from '@material-ui/core'
import "../utility/layout.css"
// import { GetMovieInfo } from '../redux/actions/actions'


class FullInfoCard extends Component {
 render(){
   const {data} = this.props;
   const cardData = data.singleMovie;
  // const {backdrop_path, belongs_to_collection, budget, genres, 
  // homepage, original_title, overview, popularity, poster_path, 
  // production_companies, production_countries, release_date, revenue, runtime, 
  // status, tagline, title, video, vote_average, vote_count, id} = this.props.data.singleMovie
  
 let genres = [] 
 cardData.genres.forEach((item) => {
genres.push(item.name)
  })

  

console.log(genres)
 
let spoken = []
cardData.spoken_languages.forEach((item) => {
  spoken.push(item.name, item.english_name)
})


  return (
    <>
      <Card>
      <div className="centerText"><b>{cardData.title}</b></div>
      <CardMedia
        component="img"
        alt={cardData.title}
        // height='80%'
        // width='300px'
        src={`https://image.tmdb.org/t/p/original/${cardData.poster_path}`}
        />
      Overview: {cardData.overview}
    <br/>
      Tagline:  {cardData.tagline}
      <br/>
      Homepage: {cardData.homepage}
      {genres}
      {spoken}
  
  


        {/* <CardMedia
        component="img"
        alt={title}
        height='300px'
        // width='300px'
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        /> */}
      </Card>
    </>
  )
    }
}

FullInfoCard.propTypes = {
//   GetMovieInfo: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  data: state.data,
})

// const mapDispatchToProps = {
//   null,
// }

export default connect(mapStateToProps, null)(FullInfoCard) 
