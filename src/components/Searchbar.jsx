import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import axios from "axios";

//https://api.seatgeek.com/2/venues?city=atlanta&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56

function Searchbar() {
    const {state, setState} = useContext(AppContext)

    const [search,setSearch] = useState('')

    const getData = async (item) => {
        const dat = await axios.get(
        `https://api.seatgeek.com/2/venues?city=${item}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`
        );

        const res = await dat.data;

        console.log(res.venues);
        setState(res.venues)
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(state)
        getData(search)
    }
  return (
    <div className='search'>
      <h1>Search form</h1>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <input type="text" value={search} 
            onChange={(e)=>{setSearch(e.target.value)}} 
            placeholder='Find your next event...'
        />
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Searchbar
