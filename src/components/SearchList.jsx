import React from 'react'
import DisplayItem from './DisplayItem'
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

function SearchList(props) {
    const {state} = useContext(AppContext)
  return (
    <div className='searchList'>
      <h1>Upcoming events in your area:</h1>
      {
        state && (

            state.length === 0 ? 
            <h1>No events found</h1> :
            
            state.map((item)=>{
            if(item.stats.event_count != 0){
                return <DisplayItem key={item.name} 
                name={item.name} url={item.url}
                address={item.address}
                numEvents = {item.stats.event_count}
                />
            }
            
        }))
      }
      {/* <DisplayItem/> */}
    </div>
  )
}

export default SearchList
