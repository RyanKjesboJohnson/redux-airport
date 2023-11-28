import React, { useState, useEffect } from 'react';
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

    setAirlineInput('');
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
      <table>
        <thead>
          <tr>
          <th>Airline Name</th>
          </tr>
        </thead>
        <tbody>
        {airlineList.map((airline) => {
            return <tr>
              <td>{airline}</td>
            </tr>
          })
        }

        </tbody>

      </table>
    </div>
  );
}

export default App;
