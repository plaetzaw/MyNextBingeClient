import React from 'react'

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
    <div style={startContainer}>
        <div style={containerItem}>
            Movies
        </div>
        <div style={containerItem}>
            TV Shows
        </div>
        <div style={containerItem}>
            People
        </div>
    </div>
      
    </>
  )
}

export default Picker
