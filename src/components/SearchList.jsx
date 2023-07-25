import React from 'react'
import DisplayItem from './DisplayItem'
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

function SearchList(props) {
    const {state} = useContext(AppContext)
    let nums = 0
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
                img={item.image}
                numEvents = {item.stats.event_count}
                />
            }
            else{
                nums++;
                if(nums===state.length){
                    nums=0
                    return <h2 key={'No events'}>No Upcoming events at found locations</h2>
                }
            }
            
        }))
      }
      {/* <DisplayItem/> */}
    </div>
  )
}

export default SearchList
