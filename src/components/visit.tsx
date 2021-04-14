import VisitInterface from "../schema/visitInterface"
import { makeStyles } from "@material-ui/core/styles"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"
import { FcFilledFilter } from "react-icons/fc"
import flags from "../flags"
import { filterType } from "../schema/filters"

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
        {visit.id}
      </TableCell>
      <TableCell align="right">
        {visit.ip}
        <FilterIcon f={{ att: "ip", value: visit.ip }} filter={filter} />
      </TableCell>
      <TableCell align="right">
        {visit.city}
        {flags[visit.country]?.emoji}
        <FilterIcon f={{ att: "city", value: visit.city }} filter={filter} />
      </TableCell>
      <TableCell align="right">{visit.os}</TableCell>
      <TableCell align="right">{visit.browser}</TableCell>
      <TableCell align="right">{visit.time}</TableCell>
    </TableRow>
  )
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
