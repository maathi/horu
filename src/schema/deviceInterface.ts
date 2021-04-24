import flags from "../flags"
import VisitInterface from "./visitInterface"

interface DeviceInterface {
  id: string
  name: string
  ip: string
  country: keyof typeof flags
  city: string
  location: string
  os: string
  browser: string
  visits?: VisitInterface[]
}

export default DeviceInterface
