import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function () {
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