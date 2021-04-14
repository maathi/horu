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
import { useState } from "react"
import Visit from "./visit"
import { filterByType, filterType } from "../schema/filters"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

type props = {
  visits: VisitInterface[]
  setVisits: Function
  setSelectedVisit: Function
}

function List({ visits, setVisits, setSelectedVisit }: props) {
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

  async function unfilter(filterable: filterByType | undefined) {
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
                <UnfilterIcon
                  filters={filters}
                  filterBy={"ip"}
                  unfilter={unfilter}
                />
              </TableCell>
              <TableCell align="right">
                City
                <UnfilterIcon
                  filters={filters}
                  filterBy={"city"}
                  unfilter={unfilter}
                />
              </TableCell>
              <TableCell align="right">os</TableCell>
              <TableCell align="right">browser</TableCell>
              <TableCell align="right">time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visits?.map((v) => (
              <Visit
                key={v.id}
                visit={v}
                filter={filter}
                setSelectedVisit={setSelectedVisit}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </h1>
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

export default List
