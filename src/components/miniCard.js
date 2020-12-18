import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core'
import "../utility/layout.css"
import { GetMovieInfo } from '../redux/actions/actions'
import { Link } from 'react-router-dom'
import  fullInfoCard  from '../components/fullMovieCard'


const MiniCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();


  const {id, title, poster_path, backdrop_path} = props

   function handleMovie (){
     console.log("I have been clicked" + "ID:" + id)
     let idObj = {
       id: id
     }
      dispatch(GetMovieInfo(idObj));
      history.push(`/movies/${id}`)
      // history.push(`/FullMovieInfo`)
      // console.log("moved to /FullInfoPage")
    }

    const [isToggled, setIsToggled] = React.useState('true')

    const toggle = React.useCallback(() => setIsToggled(!isToggled), [isToggled, setIsToggled])
  
    let buttonMarkup = isToggled ? (<Button
      style={{backgroundColor: 'red'}}>PosterPath</Button>) : 
      (<Button style={{backgroundColor: 'green'}}>BackdropPath</Button>)

    let urlPath = isToggled ? poster_path : (backdrop_path)
    return (
    <>
      <Card
      className="miniCard"
      >
      <p className="centerText"><b>{title}</b></p>

        <CardMedia
        className="posterMini"
        component="img"
        alt={title}
        src={`https://image.tmdb.org/t/p/original/${urlPath}`}
        />
         {/* <Button onClick={toggle}>  
          {buttonMarkup}
          </Button>
          <Button>Add To Favorites</Button> */}
          <span><Button 
          // component={fullInfoCard} 
          onClick={handleMovie}>
            View Full Details</Button></span>

      </Card>
    </>
  )
}

MiniCard.propTypes = {
  GetMovieInfo: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  data: state.data,
})

const mapDispatchToProps = {
  GetMovieInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCard) 
