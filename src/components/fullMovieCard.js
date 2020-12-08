import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { useDispatch } from 'react-redux'
// import { useHistory } from "react-router-dom";
import {Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core'
// import { Button } from '@material-ui/core'
import "../utility/layout.css"
// import { GetMovieInfo } from '../redux/actions/actions'


class FullInfoCard extends Component {
 render(){
   const {data} = this.props;
   const cardData = data.singleMovie.details;
   const Rec = data.singleMovie.recommendations;
   const Cast = data.singleMovie.cast;
   const Video = data.singleMovie.video;
   const WatchProviders = data.singleMovie.watchproviders;
  // const {backdrop_path, belongs_to_collection, budget, genres, 
  // homepage, original_title, overview, popularity, poster_path, 
  // production_companies, production_countries, release_date, revenue, runtime, 
  // status, tagline, title, video, vote_average, vote_count, id} = this.props.data.singleMovie
  
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
  return <Card
  width="300px"
  >
    <img
    src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
    height="300px"
    maxWidth="300px"
    />
    <li><i>{cast.name}</i> as <b>{cast.character}</b></li>
  </Card>
})


//If I'm going to do it this way, we'll add a CLose feature
//This will trigger when clicked, set the state of DataLoaded 
//back to false, and will swap back to the feed component
  return (
    <>
   
      <Card 
      className="movieCardFull"
      >
          <CardContent>
      <div className="centerText"><b><h1>{cardData.title}</h1></b>
      <i><h4>"{cardData.tagline}"</h4></i>
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
      <div
      className="castList"
      >
        {castRender}
      </div>
   
     
      <div>lorem</div>
      <div>lorem</div>


      </CardContent>
      
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
