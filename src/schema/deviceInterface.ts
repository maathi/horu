import flags from "../flags"

interface DeviceInterface {
  id: string
  name: string
  ip: string
  country: keyof typeof flags
  city: string
  location: string
  agent: string
  os: string
  browser: string
}

export default DeviceInterface
