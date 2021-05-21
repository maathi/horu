import VisitInterface from "../schema/visitInterface"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { FcClearFilters } from "react-icons/fc"
import { useState, useEffect } from "react"
import Visit from "../components/visitRow"

import { filterByType, filterType } from "../schema/filters"
import { Box, Checkbox, Typography } from "@material-ui/core"
// import { Visibility } from "@material-ui/icons"

const useStyles = makeStyles({
  tableContainer: {
    width: "100%",
    margin: "auto",
    borderRadius: "15px",
    boxShadow: "var(--shadow)",
  },
  table: {
    // width: "100%",
  },
})

function VisitScreen() {
  let classes = useStyles()
  let [visits, setVisits] = useState<VisitInterface[]>([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}`)
      .then((response) => response.json())
      .then((v) => setVisits(v))
  }, [])
  let [filters, setFilters] = useState<filterType[]>([])

  function filter(filter: filterType) {
    if (filters.find((f) => f.att === filter.att)) return

    let { att, value } = filter
    let res = visits.filter((v) => v.device[att] === value)
    filters.push({ att, value })
    setFilters(filters)
    setVisits(res)
  }

  async function unfilter(filterable: filterByType | undefined) {
    if (!filterable) return

    let res = await fetch(`${process.env.REACT_APP_API}`)
    let newVisits: VisitInterface[] = await res.json()

    let newFilters = filters.filter((f) => f.att !== filterable)

    newFilters.forEach(({ att, value }) => {
      newVisits = newVisits.filter((v) => v.device[att] === value)
    })

    setVisits(newVisits)
    setFilters(newFilters)
  }

  return (
    <>
      <Box display="flex" alignItems="center" gridGap="1rem" margin={3}>
        {/* <Visibility fontSize="large" /> */}

        <span style={{ fontSize: "45px" }}>🕵</span>
        <Typography variant="h4">Latest Visits</Typography>
      </Box>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox checked={true} />
              </TableCell>
              <TableCell align="left">
                Device
                <UnfilterIcon
                  filters={filters}
                  filterBy={"name"}
                  unfilter={unfilter}
                />
              </TableCell>
              <TableCell align="left">
                City
                <UnfilterIcon
                  filters={filters}
                  filterBy={"city"}
                  unfilter={unfilter}
                />
              </TableCell>
              <TableCell align="left">os</TableCell>
              <TableCell align="left">browser</TableCell>
              <TableCell align="left">time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visits?.map((v) => (
              <Visit key={v.id} visit={v} filter={filter} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

function UnfilterIcon({
  filters,
  filterBy,
  unfilter,
}: {
  filters: filterType[]
  filterBy: filterByType
  unfilter: Function
}) {
  let filter: filterType | undefined = filters.find((f) => f.att === filterBy)
  if (!filter) return null
  return <FcClearFilters onClick={() => unfilter(filterBy)} />
}

export default VisitScreen
