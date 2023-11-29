import { useSelector } from "react-redux";
import React from "react";


function AirlineListFunction() {
    const airlineList = useSelector((store) => store.airlineList)
    console.log(airlineList);

return(
    <table>
        <thead>
          <tr>
          <th>Airline Name</th>
          <th>Plane Count</th>
          </tr>
        </thead>
        <tbody>
        {airlineList.map((airline) => {
            return <tr>
              <td>{airline.airlineInput}</td>
              <td>{airline.planeCountInput}</td>
            </tr>
          })
        }

        </tbody>

      </table>)
}
export default AirlineListFunction;