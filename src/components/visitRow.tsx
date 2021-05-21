import VisitInterface from "../schema/visitInterface"
import { makeStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import { FcFilledFilter } from "react-icons/fc"
import flags from "../flags"
import { filterType } from "../schema/filters"
import moment from "moment"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { Checkbox } from "@material-ui/core"

const useStyles = makeStyles({
  row: {
    cursor: "pointer",
    "&:hover": {
      "& $filter": {
        // visibility: "visible",
      },
    },
  },
  filter: {
    visibility: "hidden",
  },
})

interface Props {
  visit: VisitInterface
  filter: Function
}

const Visit = ({ visit, filter, history }: Props & RouteComponentProps) => {
  let classes = useStyles()

  return (
    <TableRow
      className={classes.row}
      key={visit.id}
      onClick={() => history.push(visit.device.name)}
    >
      <TableCell padding="checkbox">
        <Checkbox checked={true} />
      </TableCell>
      <TableCell component="th" scope="row">
        {visit.device.name}
      </TableCell>
      <TableCell align="left">
        {flags[visit.device.country]?.emoji} &nbsp;
        {visit.device.city}
        <FilterIcon
          f={{ att: "city", value: visit.device.city }}
          filter={filter}
        />
      </TableCell>
      <TableCell align="left">{visit.device.os}</TableCell>
      <TableCell align="left">{visit.device.browser}</TableCell>
      <TableCell align="left">{when(visit.time)}</TableCell>
    </TableRow>
  )
}

function when(time: Date) {
  return moment(time, "YYYY-MM-DDTHH:mm:ss.SSSZ").fromNow()
}

function FilterIcon({ f, filter }: { f: filterType; filter: Function }) {
  let classes = useStyles()

  return (
    <FcFilledFilter
      className={classes.filter}
      onClick={() => {
        filter(f)
      }}
    />
  )
}

export default withRouter(Visit)
