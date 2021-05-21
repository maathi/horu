import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import VisitInterface from "../schema/visitInterface"
import {
  WatchLaterRounded,
  OpenInBrowserRounded,
  Mouse,
} from "@material-ui/icons"
import moment from "moment"
import { Box } from "@material-ui/core"
const useStyles = makeStyles({
  visitCard: {
    // width: "100%",
    // background: "white",
    // boxShadow: "var(--shadow)",
    borderRadius: "10px",
    padding: "1rem",
    margin: "1rem auto",
  },
  tableContainer: {
    width: "100%",
    margin: "auto",
    boxShadow: "none",
    borderRadius: "10px",

    // boxShadow: "3px 3px 12px 3px #c2c2c2",
  },
  table: {
    // width: "80%",
    margin: "auto",
  },
})

export default function DeviceCard({ visit }: { visit: VisitInterface }) {
  let classes = useStyles()

  return (
    <Paper elevation={1} className={classes.visitCard}>
      <Box display="flex" alignItems="center" gridGap="0.5rem">
        <WatchLaterRounded color={"primary"} />
        <b>{when(visit.time)}</b>
      </Box>
      <p>
        {visit.referer ? (
          <Box display="flex" alignItems="center" gridGap="0.5rem">
            <OpenInBrowserRounded color={"primary"} />
            {visit.referer}
          </Box>
        ) : (
          ""
        )}
      </p>

      <Box display="flex" alignItems="center" gridGap="0.5rem">
        <Mouse color={"primary"} />
        events :
      </Box>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {visit.events?.map((e) => (
              <TableRow key={e.time}>
                <TableCell align="center">{e.title}</TableCell>
                <TableCell align="center">
                  {moment()
                    .startOf("day")
                    .milliseconds(
                      e.time -
                        moment(visit.time, "YYYY-MM-DDTHH:mm:ss.SSSZ").valueOf()
                    )
                    .format("mm:ss")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

function when(time: Date) {
  return moment(time, "YYYY-MM-DDTHH:mm:ss.SSSZ").fromNow()
}
