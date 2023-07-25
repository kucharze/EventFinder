import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

function Criteria() {
    const {state, setState, setPerformer, performer, city, setCity} = useContext(AppContext)
  return (
    <div className='criteria'>
        <button className='btn' onClick={()=>{setPerformer(false); setCity(true)}}>Search by City</button>
        <button className='btn' onClick={()=>{setCity(false); setPerformer(false)}}>Search by State</button>
        <button className='btn' onClick={()=>{setPerformer(true)}}>Search by Performer</button>
    </div>
  )
}

export default Criteria
