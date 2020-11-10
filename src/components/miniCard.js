import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'

const miniCard = (props) => {
    const {title, overview, poster_path, backdrop_path} = props
  return (
    <>
      <Card
      width="400px"
      height="400px"
      >
        <CardMedia
        component="img"
        alt={title}
        height={'300px'}
        width={'300px'}
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        />
          <h1>{title}</h1>
          <i>{overview}</i>
          <CardMedia
        component="img"
        alt={title}
        height={'300px'}
        width={'300px'}
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        />
      </Card>
    </>
  )
}

export default miniCard
