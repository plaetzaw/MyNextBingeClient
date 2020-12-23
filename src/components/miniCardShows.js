import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core';
import { GetShowInfo } from '../redux/actions/actions'



const MiniCard = (props) => {
  const dispatch = useDispatch();
  const {id, name, poster_path} = props

  function handleShow(){
    console.log("I have been clicked ID:" + id)
    let idObj = {
      id: id
    }
     dispatch(GetShowInfo(idObj));
   }
    return (
    <>
      <Card
      >
      {/* <b>{name}</b> */}
        <CardMedia
        component="img"
        alt={name}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        />
          <Button
          onClick={handleShow}
          ><p className="centerText"><b>View Show Information</b></p></Button>
      </Card>
    </>
  )
}

MiniCard.propTypes = {
  GetShowInfo: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  data: state.data,
})

const mapDispatchToProps = {
  GetShowInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCard) 
