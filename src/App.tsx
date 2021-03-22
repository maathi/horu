import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  let [visits, setVisits] = useState<any>()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}`)
      .then((response) => response.json())
      .then((v) => setVisits(v))
  }, [])

  return (
    <div className="App">
      <h1>hello again</h1>
      <ul>
        {visits?.map((v: any) => (
          <li key={v.id}>{v.city}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
