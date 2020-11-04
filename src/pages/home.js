import React from 'react'
import Binge from '../utility/images/JustOneMore.png'
import Card from '@material-ui/core/Card'
// import { layoutGenerator } from "react-break";
import '../utility/layout.css'

const greetingItem = {
    display: 'flex',
    width: '100%',
    height: '25rem',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px', 
    border: '5px',
    borderStyle: 'dotted',
    borderColor: 'teal',
    margin: '5px',
    backgroundColor: '#278EE3',
    textAlign: 'center',
    fontSize: 'x-large',

}

const endItem = {
    display: 'flex',
    // backgroundColor: '#278EE3',
    height: '6rem',
    width: '6rem',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  

}

const button = {
    width: '100%',
    height: '100%',
    backgroundColor: '#278EE3',
    border: '5px',
    borderStyle: 'dotted',
}

function Home() {
   
  return (
    <>
    <div>
    <div className="title"><b>YourNextBinge</b></div>
      <div className="startContainer"
    >
          <Card style={greetingItem}>
          <span><b>YourNextBinge</b> is designed to help you find the next movie
           or tv show for you to bingewatch!</span>
           <br/>
           <img className='img-responsive' src={Binge} alt="watching a show" style={{width: '50%', height: '50%'}}></img>
          </Card>
          <Card style={greetingItem}>
          Using this application, you can search for shows or movies that you want to watch from a variety
          of generes, or a direct search.
          <br/>
          <br/>
          <br/>
          Alternatively, if you have a particular actor/actress that you really want to see more of, you can search 
          for media that they appear in.
          </Card>

          <Card style={greetingItem}>
          This app is powered by The Movie Database API and is built in React.
            <br/>
            <br/>
            You may register as a user and login, or proceed as a guest. However, proceeding as a guest
            will disable several key features
          </Card>
      </div>
      <div className="endContainer">
        <div style={endItem}><button style={button}><b>Register for MyNextBinge</b></button></div>
        <div style={endItem}><button style={button}><b>Login</b></button></div>
        <div style={endItem}><button style={button}><b>Proceed as Guest</b></button></div>
      </div>
      </div>
    </>
  )
}

export default Home
