import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'

const miniCard = (props) => {
    const {title, overview, poster_path, backdrop_path} = props
  return (
    <>
      <Card
      width="300px"
      height="300px"
      >
        <CardMedia
        component="img"
        alt={title}
        height='100px'
        width='100px'
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        />
          <b>{title}</b>
          <i>{overview}</i>
          <CardMedia
        component="img"
        alt={title}
        height='100px'
        width='100px'
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        />
      </Card>
    </>
  )
}

export default miniCard
