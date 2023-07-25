import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import axios from "axios";
import Criteria from './Criteria';
import states from '../models/states';

//https://api.seatgeek.com/2/venues?city=atlanta&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56
//performaers?slug=${person}
// "https://api.seatgeek.com/2/performers?slug=pittsburgh-pirates&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56"

function Searchbar() {
    const {state, setState, performer, city} = useContext(AppContext)

    const [search,setSearch] = useState('')

    const getData = async (item) => {
        const dat = await axios.get(
        `https://api.seatgeek.com/2/venues?city=${item}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`
        );

        const res = await dat.data;

        console.log(res.venues);
        setState(res.venues)
    };

    const findState = (item) =>{
        item = item.toLowerCase().replaceAll(' ', '')

        console.log(item)
        console.log(states[item])
        getState(states[item])
    }

    const getState = async (item) => {
        try{
            const dat = await axios.get(
            `https://api.seatgeek.com/2/venues?state=${item}&client_id=MzUxMzQ3NDV8MTY5MDIxMDg3Ni4wMzM0NDY2&client_secret=54ff34499e1de30d55b12348090f73527deafbb637cc69edf831681d1df80b56`
            );

            const res = await dat.data;

            console.log(res.venues);
            setState(res.venues)
        }
        catch(err){
            alert('Error searching for locations')
        }
       
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
        if(search===''){
            alert('No search term detected')
            return
        }

        if(performer){
            console.log("Search term",search)
            getPerson(search)
        }
        else if(city){
            getData(search)
        }
        else{
            console.log("state")
            // getState(search)
            findState(search)
        }
        
    }
  return (
    <div className='search'>
      <Criteria/>
      <form onSubmit={(e) => {handleSubmit(e)}}>
        {
            // (!performer && !city) && <h2>Please Use state abbreviation in search</h2>
        }
        {
            (!performer && city) && <input type="text" value={search} 
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
        {
            (!performer && !city) && <input type="text" value={search} 
            onChange={(e)=>{setSearch(e.target.value)}} 
            placeholder='Input State..'
        />
        }
        
        <input type='submit' className='submit'/>
      </form>
    </div>
  )
}

export default Searchbar
