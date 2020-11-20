import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core';


const PeopleCard = (props) => {
    const {name, profile_path, adult, gender, known_for} = props

    // const [isToggled, setIsToggled] = React.useState('true')

    // const toggle = React.useCallback(() => setIsToggled(!isToggled), [isToggled, setIsToggled])
  

    return (
    <>
      <Card
      width="500px"
      height="500px"
      >
      <b>{name}</b>

        <CardMedia
        component="img"
        alt={name}
        height='300px'
        width='300px'
        src={`https://image.tmdb.org/t/p/original/${profile_path}`}
        />
       
          <Button>Add To Favorites</Button>

      </Card>
    </>
  )
}

export default PeopleCard
