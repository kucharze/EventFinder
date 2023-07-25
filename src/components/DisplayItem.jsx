import React from 'react'
import {Link} from 'react-router-dom'

function DisplayItem(props) {
    //console.log("In display",props.img)
  return (
    <div className='searchItem'>
      <h2>{props.name}</h2>
      <h4>{props.address} {props.extend}</h4>
      {
        //For performers
        props.img && <img src={props.img}/>
      }
      
      <h4>Number of upcoming events: {props.numEvents}</h4>
      <Link to={props.url}>Click to browse tickets</Link>
    </div>
  )
}

export default DisplayItem
