import React from "react"
import flags from "../flags"

interface VisitInterface {
  id: React.Key
  referer: string
  agent: string
  os: string
  browser: string
  ip: string
  country: keyof typeof flags
  city: string
  loc: string
  time: Date
}

export default VisitInterface
