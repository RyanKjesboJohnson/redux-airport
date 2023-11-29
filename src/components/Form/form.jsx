import { useState} from "react";
import { useDispatch } from "react-redux";

export default function Form () {
    const [airlineInput, setAirlineInput] = useState('');
    const [planeCountInput, setPlaneCountInput] = useState(0);

    const newItem = {airlineInput, planeCountInput}

    const dispatch = useDispatch()
  
    const addAirlineName = (e) => {
      e.preventDefault()
  
      dispatch({
        type: 'ADD_NEW_AIRLINE',
        payload: newItem
      })
  
      setAirlineInput('');
      setPlaneCountInput(0)
    }


   
   return( 
   <form onSubmit={addAirlineName}>
      <input 
      value={airlineInput}
      onChange = {(e) => setAirlineInput(e.target.value)}
      type="text"
      placeholder="Airline Name" />
        <input 
      value={planeCountInput}
      onChange = {(e) => setPlaneCountInput(e.target.value)}
      type="number"
      placeholder="# of Planes" />
      <button>Add Airline</button>
    </form>)
}