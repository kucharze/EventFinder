import React from 'react'
import {Link} from 'react-router-dom'

function DisplayItem(props) {
  return (
    <div className='searchItem'>
      <h2>{props.name}</h2>
      <h4>{props.address}</h4>
      {
        //For performers
        props.image && <img src={props.img}/>
      }
      
      <h4>Number of upcoming events: {props.numEvents}</h4>
      <Link to={props.url}>Click to browse tickets</Link>
    </div>
  )
}

export default DisplayItem
