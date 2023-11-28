import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

export default function () {
    const airlineList = useSelector((store) => store.airlineList)

return(
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

      </table>)
}