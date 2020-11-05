import React from 'react'
import Card from '@material-ui/core/Card'
import { useHistory} from 'react-router-dom'
import '../utility/layout.css'



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
let history = useHistory();

function navigateMovies(){
    history.push("/movies")
}

function navigateTvshows(){
    history.push("/tvshows")
}

function navigatePeople(){
    history.push("/people")
}


  return (
    <>
    <span className="title"><h1><i>What are you looking for?</i></h1></span>
    <div className="startContainer">
        <Card className="pickerItem">
        <button className="button" onClick={navigateMovies}>Movies</button>
        </Card>
        <Card className="pickerItem">
        <button className="button" onClick={navigateTvshows}>TV Shows</button>

        </Card>
        <Card className="pickerItem">
        <button className="button" onClick={navigatePeople}>People</button>

        </Card>
    </div>
      
    </>
  )
}

export default Picker
