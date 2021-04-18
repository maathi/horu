import GoogleMapReact from "google-map-react"
import VisitInterface from "../schema/visitInterface"

const Marker = ({
  text,
  lat,
  lng,
  selected,
}: {
  text: String
  lat: Number
  lng: Number
  selected: Boolean
}) => (
  <div style={{ color: selected ? "red" : "yellow", fontSize: "24px" }}>
    {text}
  </div>
)

function Map({
  visits,
  selectedVisit,
}: {
  visits: VisitInterface[]
  selectedVisit: VisitInterface | undefined
}) {
  return (
    <div
      style={{
        height: "50vh",
        width: "80vw",
        border: "2px solid yellow",
        margin: "1rem auto",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY || "" }}
        defaultCenter={{
          lat: -34.397,
          lng: 150.644,
        }}
        center={
          selectedVisit
            ? {
                lat: Number(selectedVisit?.device.location?.split(",")[0]),
                lng: Number(selectedVisit?.device.location?.split(",")[1]),
              }
            : undefined
        }
        defaultZoom={2}
      >
        {visits?.map((v) => (
          <Marker
            key={v.id}
            lat={Number(v.device.location.split(",")[0])}
            lng={Number(v.device.location.split(",")[1])}
            selected={v.id === selectedVisit?.id ? true : false}
            text="+"
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
