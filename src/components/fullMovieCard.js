import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
import Placeholder from "../utility/images/200x340.png"
import 'primeflex/primeflex.css';
// import { useDispatch } from 'react-redux'
// import { useHistory } from "react-router-dom";
import {Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core'
// import { Button } from '@material-ui/core'
import "../utility/layout.css"


class FullInfoCard extends Component {

 render(){
   const {data} = this.props;
   const cardData = data.singleMovie.details;
   const Rec = data.singleMovie.recommendations;
   const Cast = data.singleMovie.cast;
   const Video = data.singleMovie.video;
   const WatchProviders = data.singleMovie.watchproviders;


  
 let genres = [] 
 cardData.genres.forEach((item) => {
genres.push("|" + " " + item.name + " " + "|")
  })


  

console.log(genres)
 
let spoken = []
cardData.spoken_languages.forEach((item) => {
  spoken.push(item.name, item.english_name)
})

let castRender = Cast.cast.map((cast) => {
  let phChecker = cast.profile_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${cast.profile_path}`)
  return <Card
  >
    <img
    src={phChecker}
    height="300px"
    // width="300px"
    />
    <li className="centerText"><i>{cast.name}</i> as <br/>
    <b>{cast.character}</b></li>
  </Card>
})

let recRender = Rec.results.map((recs) => {
  let ppChecker = recs.poster_path === null ? (Placeholder) : (`https://image.tmdb.org/t/p/original/${recs.poster_path}`)
  return <Card>
    <img
    src={ppChecker}
    // src={`https://image.tmdb.org/t/p/original/${recs.poster_path}`}
    height="400px"
    maxWidth="300px"
    />
    <br/>
    <p className="centerText"> <b>{recs.title}</b></p>

  </Card>
})

let tagChecker = cardData.tagline === "" ?  (<></>) : (<i><h3>"{cardData.tagline}"</h3></i>)

//If I'm going to do it this way, we'll add a CLose feature
//This will trigger when clicked, set the state of DataLoaded 
//back to false, and will swap back to the feed component
  return (
    <>
    <div
    className="movieCardContainer">
      <Card 
      className="movieCardFull"
      >
      <CardContent>
      <div className="centerText"><b><h1>{cardData.title}</h1></b>
      {tagChecker}
      </div>
      <CardMedia
        className="poster"
        component="img"
        alt={cardData.title}
        src={`https://image.tmdb.org/t/p/original/${cardData.poster_path}`}
        />
      
      <br/>
      <div className="centerText"> <h3>{cardData.overview}</h3>
      <br/>
      Homepage: {cardData.homepage}
      <br/>
      Genres: {genres}
      <br/>
      <div className="moviecardInfoContainer">
      <div className="movieCardItem1">Reported Revenue: ${cardData.revenue}</div>
      
      <div className="movieCardItem2">
      Released: {cardData.release_date}</div>
      </div> 
      <div className="movieCardItem3">
      Runtime: {cardData.runtime} minutes
      </div>
    
      </div>
      
   
     
   
      <h1 className="centerText">Cast</h1>
      <div
      className="p-grid"
      >
        {castRender}
      </div>

      <h1 className="centerText">Recommendations based on {cardData.title}</h1>
      <div
      className="p-grid"
      >
      {recRender}
      </div>




      </CardContent>
      
      </Card>
      </div>
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
