import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core';
import "../utility/layout.css"
import { GetMovieInfo } from '../redux/actions/actions';


const MiniCard = (props) => {
  const {id, title, overview, poster_path, backdrop_path} = props

   function handleMovie (){
     console.log("I have been clicked" + "ID:" + id)
      GetMovieInfo(id)
      // props.history.push(`/movies/${id}`)
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
      // width="50px"
      // height="50px"
      >
      <div className="centerText"><b>{title}</b></div>

        <CardMedia
        component="img"
        alt={title}
        height='300px'
        // width='300px'
        src={`https://image.tmdb.org/t/p/original/${urlPath}`}
        />
         <Button onClick={toggle}>  
          {buttonMarkup}
          </Button>
          <Button>Add To Favorites</Button>
          <Button onClick={handleMovie}>More Information</Button>

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
