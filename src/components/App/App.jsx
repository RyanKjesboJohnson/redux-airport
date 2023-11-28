import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [airlineInput, setAirlineInput] = useState('');

  const airlineList = useSelector((store) => store.airlineList)

  const dispatch = useDispatch()

  const addAirlineName = (e) => {
    e.preventDefault()

    dispatch({
      type: 'ADD_NEW_AIRLINE',
      payload: airlineInput
    })
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={addAirlineName}
      >
        <input 
        value={airlineInput}
        onChange = {(e) => setAirlineInput(e.target.value)}
        type="text"
        placeholder="Airline Name" />
        <button>Add Airline</button>
      </form>
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;
