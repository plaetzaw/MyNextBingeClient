import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core';
import "../utility/layout.css"


const MiniCard = (props) => {
    const {title, overview, poster_path, backdrop_path} = props

    const [isToggled, setIsToggled] = React.useState('true')

    const toggle = React.useCallback(() => setIsToggled(!isToggled), [isToggled, setIsToggled])
  
    let buttonMarkup = isToggled ? (<Button
      style={{backgroundColor: 'red'}}>PosterPath</Button>) : 
      (<Button style={{backgroundColor: 'green'}}>BackdropPath</Button>)

    let urlPath = isToggled ? poster_path : (backdrop_path)
    return (
    <>
      <Card
      // width="500px"
      height="500px"
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
          <Button>More Information</Button>

      </Card>
    </>
  )
}

export default MiniCard
