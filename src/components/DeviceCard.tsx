import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import DeviceInterface from "../schema/deviceInterface"
import flags from "../flags"

const useStyles = makeStyles({
  tableContainer: {
    marginTop: "6rem",
    borderRadius: "10px",
    boxShadow: "var(--shadow)",
  },
  table: {
    // width: "100%",
  },
})

export default function DeviceCard({ device }: { device: DeviceInterface }) {
  let classes = useStyles()
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">{flags[device.country].name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">{device.city}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Ip</TableCell>
            <TableCell align="center">{device.ip}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">OS</TableCell>
            <TableCell align="center">{device.os}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Browser</TableCell>
            <TableCell align="center">{device.browser}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
