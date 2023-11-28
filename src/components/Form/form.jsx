import { useState} from "react";
import { useDispatch } from "react-redux";

export default function Form () {
    const [airlineInput, setAirlineInput] = useState('');

    const dispatch = useDispatch()
  
    const addAirlineName = (e) => {
      e.preventDefault()
  
      dispatch({
        type: 'ADD_NEW_AIRLINE',
        payload: airlineInput
      })
  
      setAirlineInput('');
    }
   
   return( 
   <form onSubmit={addAirlineName}>
      <input 
      value={airlineInput}
      onChange = {(e) => setAirlineInput(e.target.value)}
      type="text"
      placeholder="Airline Name" />
      <button>Add Airline</button>
    </form>)
}