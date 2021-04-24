import DeviceInterface from "../schema/deviceInterface"
import { useEffect, useState } from "react"
import DeviceCard from "../components/DeviceCard"
import VisitCard from "../components/visitCard"
import Grid from "@material-ui/core/Grid"
import flags from "../flags"

const DeviceScreen = ({ match }: any) => {
  let [device, setDevice] = useState<DeviceInterface>()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/${match.params.name}`)
      .then((response) => response.json())
      .then((r) => setDevice(r))
  }, [])

  if (!device) return <h1>no such device</h1>
  if (!device.visits) return <h1>no such device</h1>

  return (
    <>
      <Grid item md={8} xs={12}>
        <h1>
          {flags[device.country]?.emoji} &nbsp;{device?.name}
        </h1>
        <h4>
          visits made by <b>{device?.name}</b> :
        </h4>
        {device?.visits?.map((v) => (
          <VisitCard key={v.id} visit={v}></VisitCard>
        ))}
      </Grid>
      <Grid item md={4} xs={12}>
        <DeviceCard device={device}></DeviceCard>
      </Grid>
    </>
  )
}

export default DeviceScreen
