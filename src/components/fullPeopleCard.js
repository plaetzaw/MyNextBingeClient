import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import Placeholder from "../utility/images/200x340.png"
import Placeholder from "../utility/images/266x400.png"
import 'primeflex/primeflex.css';
import {Card, CardMedia, CardContent, Paper } from '@material-ui/core'
import "../utility/layout.css"
import { ExitFullInfo, GetPersonInfo } from '../redux/actions/actions';

class FullInfoCard extends Component {
    returnToMovies = (e) => {
      e.preventDefault();
      console.log("I have been clicked")
      this.props.ExitFullInfo()
    }
    render(){
        const {data} = this.props;
        const cardData = data.person.details;
        const credits = data.person.credits

        let creditsRender = credits.cast.map((credits) => {
            let phChecker = credits.poster_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${credits.poster_path}`)
            return <Card
            >
              <img
              src={phChecker}
              height="400"
              />
              <li className="centerText"><i>in {credits.title}</i> as <br/>
              <b>{credits.character}</b></li>
              <br/>
              <i>Released: {credits.release_date}</i>
            </Card>
          })

        return (
            <>
            <div className="movieCardContainer">
            <Card
            className="movieCardFull">
                   <CardContent>
        <button 
        component={Link}
        to="/movies"
        onClick={this.returnToMovies}
        >
          X</button>
          <div className="centerText"><b><h1>{cardData.name}</h1></b></div>
          <CardMedia
        className="poster"
        component="img"
        alt={cardData.name}
        src={`https://image.tmdb.org/t/p/original/${cardData.profile_path}`}
        />
        <br/>
        <div className="centerText"> <h3>{cardData.biography}</h3></div>

        <h1 className="centerText">Credits for {cardData.name}</h1>
        <div className="p-grid">
            {creditsRender}
            </div>    
            </CardContent>
            </Card>
            </div>
            </>
        )
    }
}


FullInfoCard.propTypes = {
    ExitFullInfo: PropTypes.func.isRequired,
    GetPersonInfo: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }
  
  const mapStateToProps = (state) => ({
    data: state.data,
  })
  
  const mapDispatchToProps = {
    ExitFullInfo, GetPersonInfo
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(FullInfoCard) 
  