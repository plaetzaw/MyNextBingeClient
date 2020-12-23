import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core';
import { GetPersonInfo } from '../redux/actions/actions'



const PeopleCard = (props) => {
  const dispatch = useDispatch();
    const {id, name, profile_path, adult, gender, known_for} = props

    function handlePerson(){
      console.log("I have been clicked" + "ID:" + id)
      let idObj = {
        id: id
      }
       dispatch(GetPersonInfo(idObj));
     }

    // const [isToggled, setIsToggled] = React.useState('true')

    // const toggle = React.useCallback(() => setIsToggled(!isToggled), [isToggled, setIsToggled])
  

    return (
    <>
      <Card
      // width="500px"
      // height="500px"
      >
      <b>{name}</b>

        <CardMedia
        component="img"
        alt={name}
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        />
       
          <Button
          onClick={handlePerson}><p className="centerText"><b>View Full Credits</b></p></Button>

      </Card>
    </>
  )
}

PeopleCard.propTypes = {
  GetPersonInfo: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  data: state.data,
})

const mapDispatchToProps = {
  GetPersonInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCard) 
