import React from 'react'
import Binge from '../utility/images/JustOneMore.png'

const startContainer = {
    backgroundColor: 'palegreen',
    display: 'flex',
    flexFlow: 'row-wrap',
    justifyContent: 'space-around'
}

const greetingItem = {
    display: 'flex',
    width: '100%',
    height: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px', 
    border: '5px',
    borderStyle: 'dotted',
    borderColor: 'teal',
    margin: '5px',
    backgroundColor: 'pink',
    textAlign: 'center',
    fontSize: 'x-large',

}

const endContainer = {
    backgroundColor: 'lightgreen',
    width: '100%',
    display: 'flex',
    flexFlow: 'row-wrap',
    justifyContent: 'space-around'
}

const endItem = {
    display: 'flex',
    backgroundColor: 'pink',
    height: '15vh',
    width: '15vh',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  

}

function Home() {
  return (
    <>
    <div style={{textAlign: 'center', backgroundColor: 'lightgreen'}}><h1><b>YourNextBinge</b></h1></div>
      <div style={startContainer}>
          <div style={greetingItem}>         
          <span><b>YourNextBinge</b> is designed to help you find the next movie
           or tv show for you to bingewatch!</span>
           <br/>
           <img className='img-responsive' src={Binge} style={{width: '50%', height: '50%'}}></img>
          </div>
          <div style={greetingItem}>
          Using this application, you can search for shows or movies that you want to watch from a variety
          of generes, or a direct search.
          <br/>
          <br/>
          <br/>
          Alternatively, if you have a particular actor/actress that you really want to see more of, you can search 
          for media that they appear in.
          </div>
          <div style={greetingItem}>
            This app is powered by The Movie Database API and is built in React.
            <br/>
            <br/>
            You may register as a user and login, or proceed as a guest. However, proceeding as a guest
            will disable several key features
          </div>
          
      </div>
      <div style={endContainer}>
        <div style={endItem}><button>Register for MyNextBinge</button></div>
        <div style={endItem}><button>Login</button></div>
        <div style={endItem}><button>Proceed as Guest</button></div>
      </div>
    </>
  )
}

export default Home
