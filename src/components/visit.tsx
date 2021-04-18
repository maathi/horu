import VisitInterface from "../schema/visitInterface"
import { makeStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import { FcFilledFilter } from "react-icons/fc"
import flags from "../flags"
import { filterType } from "../schema/filters"
import moment from "moment"

const useStyles = makeStyles({
  row: {
    "&:hover": {
      "& $filter": {
        visibility: "visible",
      },
    },
  },
  filter: {
    visibility: "hidden",
  },
})

type props = {
  visit: VisitInterface
  filter: Function
  setSelectedVisit: Function
}

export default function Visit({ visit, filter, setSelectedVisit }: props) {
  let m = moment(visit.time, "YYYY-MM-DDTHH:mm:ss.SSS").fromNow()
  console.log(m)
  let classes = useStyles()

  return (
    <TableRow
      className={classes.row}
      key={visit.id}
      onClick={() => {
        setSelectedVisit(visit)
      }}
    >
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
