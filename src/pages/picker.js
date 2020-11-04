import React from 'react'
import Card from '@material-ui/core/Card'

const startContainer = {
    width: '100%',
    height: '100%',
    backgroundColor: '#B80000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}

const containerItem = {
    display: 'flex',
    backgroundColor: '#278EE3',
    width: '100%',
    height: '10rem',
    textAlign: 'center',
    fontSize: 'xxx-large',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',

}

function Picker() {
  return (
    <>
    <div className="startContainer">
        <Card style={containerItem}>
            Movies
        </Card>
        <Card style={containerItem}>
            TV Shows
        </Card>
        <Card style={containerItem}>
            People
        </Card>
    </div>
      
    </>
  )
}

export default Picker
