import React from "react"
import DeviceInterface from "./deviceInterface"

interface VisitInterface {
  id: React.Key
  referer: string
  time: Date
  events: [{ title: string; time: number }]
  device: DeviceInterface
}

export default VisitInterface
