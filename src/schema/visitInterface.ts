import React from "react"

interface VisitInterface {
  id: React.Key
  referer: String
  agent: String
  ip: String
  city: String
  loc: String
  time: Date
}

export default VisitInterface
