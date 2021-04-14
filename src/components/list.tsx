import VisitInterface from "../schema/visitInterface"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { FcFilledFilter, FcClearFilters } from "react-icons/fc"
import { useState } from "react"
import flags from "../flags"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
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

type filterableType = "ip" | "city"

type filterType = {
  att: filterableType
  value: string
}

function List({
  visits,
  setVisits,
  setSelectedVisit,
}: {
  visits: VisitInterface[]
  setVisits: Function
  setSelectedVisit: Function
}) {
  let classes = useStyles()
  let [filters, setFilters] = useState<filterType[]>([])

  function filter(filter: filterType) {
    if (filters.find((f) => f.att === filter.att)) return

    let { att, value } = filter
    let res = visits.filter((v) => v[att] === value)
    filters.push({ att, value })
    setFilters(filters)
    setVisits(res)
  }

  async function unfilter(filterable: filterableType | undefined) {
    if (!filterable) return

    let res = await fetch(`${process.env.REACT_APP_API}`)
    let newVisits: VisitInterface[] = await res.json()

    let newFilters = filters.filter((f) => f.att !== filterable)

    newFilters.forEach(({ att, value }) => {
      newVisits = newVisits.filter((v) => v[att] === value)
    })

    setVisits(newVisits)
    setFilters(newFilters)
  }

  return (
    <h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">
                ip
                {filters.find((f) => f.att === "ip") ? (
                  <FcClearFilters
                    onClick={() =>
                      unfilter(filters.find((f) => f.att === "ip")?.att)
                    }
                  />
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell align="right">
                City
                {filters.find((f) => f.att === "city") ? (
                  <FcClearFilters
                    onClick={() =>
                      unfilter(filters.find((f) => f.att === "city")?.att)
                    }
                  />
                ) : (
                  ""
                )}
              </TableCell>
              <TableCell align="right">os</TableCell>
              <TableCell align="right">browser</TableCell>
              <TableCell align="right">time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visits?.map((v) => (
              <TableRow
                className={classes.row}
                key={v.id}
                onClick={() => {
                  setSelectedVisit(v)
                }}
              >
                <TableCell component="th" scope="row">
                  {v.id}
                </TableCell>
                <TableCell align="right">
                  {v.ip}
                  <FcFilledFilter
                    className={classes.filter}
                    onClick={() => {
                      filter({ att: "ip", value: v.ip })
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  {v.city}
                  {flags[v.country]?.emoji}
                  <FcFilledFilter
                    className={classes.filter}
                    onClick={() => {
                      filter({ att: "city", value: v.city })
                    }}
                  />
                </TableCell>
                <TableCell align="right">{v.os}</TableCell>
                <TableCell align="right">{v.browser}</TableCell>
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
