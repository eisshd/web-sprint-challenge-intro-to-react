import React, { Component, useState, useEffect } from 'react';
import Character from './components/Character'
import { render } from '@testing-library/react';
import axios from 'axios'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    const [data, setData] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    useEffect(() => {
      axios.get(`https://swapi.dev/api/people/`)
            //  setData = response.data from the api
           .then(res => {setData(res.data)})
           .catch(err => console.error(err))
    }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* map over the data to render the name and key */}
      {data.map((ele, idx) => (<Character data={ele} key={idx}/>))}
    </div>
  );
}

export default App;
