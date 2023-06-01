// Write your Character component here
import React, { Component, useState } from 'react'
import axios from 'axios'

// Character component should list the names from the API and a have a toggled drop down for the rest of the data
function Character({ data }){
    // console.log(data, 'Character')
    const [toggle, setToggle] = useState(true)

    const dropDown = () => {
        setToggle(!toggle)
        }
        
   
    

    return (        
            <div className='character-wrapper'>
            <h1 className='character-name' onClick={dropDown}>
                {data.name}
            </h1>
            <h1>
                {toggle === true ? '>' : '<'}
            </h1>
            {/* create a toggle onclick to map and render the rest of the data based on the key */}
            {toggle && (<div className='character-info'>
                   <ul>Height: {data.height} </ul>
                   <ul>Mass:       {data.mass}</ul>
                   <ul>Hair Color: {data.hair_color}</ul>
                   <ul>Skin Color: {data.skin_color}</ul>
                   <ul>Eye Color:  {data.eye_color}</ul>
                   <ul>Birth Year: {data.birth_year}</ul>
                   <ul>Gender:     {data.gender}</ul>
            </div>)}
            </div>        
            )
}

export default Character