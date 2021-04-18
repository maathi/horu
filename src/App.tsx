import React, { useState, useEffect } from "react"
import "./App.css"
import List from "./components/list"
import Map from "./components/map"
import VisitInterface from "./schema/visitInterface"

function App() {
  let [visits, setVisits] = useState<VisitInterface[]>([])
  let [selectedVisit, setSelectedVisit] = useState<VisitInterface | undefined>()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}`)
      .then((response) => response.json())
      .then((v) => setVisits(v))
  }, [])

  return (
    <div className="App">
      {/* <Map visits={visits} selectedVisit={selectedVisit}></Map> */}
      <List
        visits={visits}
        setVisits={setVisits}
        setSelectedVisit={setSelectedVisit}
      ></List>
    </div>
  )
}

export default App
