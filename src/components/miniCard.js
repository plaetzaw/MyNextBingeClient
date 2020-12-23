import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core'
import "../utility/layout.css"
import { GetMovieInfo } from '../redux/actions/actions'



const MiniCard = (props) => {
  const dispatch = useDispatch();
  const {id, title, poster_path, backdrop_path} = props

   function handleMovie (){
     console.log("I have been clicked" + "ID:" + id)
     let idObj = {
       id: id
     }
      dispatch(GetMovieInfo(idObj));
    }

    const [isToggled, setIsToggled] = React.useState('true')

    const toggle = React.useCallback(() => setIsToggled(!isToggled), [isToggled, setIsToggled])

    let urlPath = isToggled ? poster_path : (backdrop_path)
    return (
    <>
      <Card
      className="miniCard"
      >
        <CardMedia
        className="posterMini"
        component="img"
        alt={title}
        src={`https://image.tmdb.org/t/p/original/${urlPath}`}
        />  
          <Button 
          onClick={handleMovie}>
           <p className="centerText"><b>View Full Information</b></p></Button>

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
