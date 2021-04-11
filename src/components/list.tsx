import VisitInterface from "../schema/visitInterface"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

function List({ visits }: { visits: VisitInterface[] }) {
  let classes = useStyles()
  return (
    <h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">ip</TableCell>
              <TableCell align="right">loc</TableCell>
              <TableCell align="right">time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visits?.map((v) => (
              <TableRow key={v.id}>
                <TableCell component="th" scope="row">
                  {v.id}
                </TableCell>
                <TableCell align="right">{v.city}</TableCell>
                <TableCell align="right">{v.ip}</TableCell>
                <TableCell align="right">{v.loc}</TableCell>
                <TableCell align="right">{v.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </h1>
  )
}

export default List
