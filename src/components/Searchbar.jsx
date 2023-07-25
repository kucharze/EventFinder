import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import axios from "axios";

//https://api.seatgeek.com/2/venues?city=atlanta&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56
//performaers?slug=${person}
function Searchbar() {
    const {state, setState, setPerformer, performer} = useContext(AppContext)

    const [search,setSearch] = useState('')

    const getData = async (item) => {
        const dat = await axios.get(
        `https://api.seatgeek.com/2/venues?city=${item}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`
        );

        const res = await dat.data;

        console.log(res.venues);
        setState(res.venues)
    };

    const getPerson = async (item) => {
        
        item = item.replaceAll(' ','-')

        console.log(item)
        
        const dat = await axios.get(
         `https://api.seatgeek.com/2/performers?slug=${item}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`
        );

        const res = await dat.data;

        console.log(res.performers);
        setState(res.performers)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        //console.log(state)
        if(performer){
            console.log("Search term",search)
            getPerson(search)
        }
        else{
            getData(search)
        }
        
    }
  return (
    <div className='search'>
      <h1>Find Upcoming events based on location or performer</h1>
      <button className='btn' onClick={()=>{setPerformer(false)}}>Search by Location</button>
      <button className='btn' onClick={()=>{setPerformer(true)}}>Search by Performer</button>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        {
            !performer && <input type="text" value={search} 
            onChange={(e)=>{setSearch(e.target.value)}} 
            placeholder='Input City..'
        />
        }
        {
            performer && <input type="text" value={search} 
            onChange={(e)=>{setSearch(e.target.value)}} 
            placeholder='Input Performer..'
        />
        }
        
        <input type='submit' className='submit'/>
      </form>
    </div>
  )
}

export default Searchbar
