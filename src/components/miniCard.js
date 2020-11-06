import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'

const miniCard = (props) => {
    const {title} = props
  return (
    <>
      <Card>
          {title}
      </Card>
    </>
  )
}

export default miniCard
