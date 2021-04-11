import GoogleMapReact from "google-map-react"
import VisitInterface from "../schema/visitInterface"

const Marker = ({
  text,
  lat,
  lng,
}: {
  text: String
  lat: Number
  lng: Number
}) => <div style={{ color: "red", fontSize: "24px" }}>{text}</div>

function Map({ visits }: { visits: VisitInterface[] }) {
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
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        defaultZoom={2}
      >
        {visits?.map((v) => (
          <Marker
            lat={Number(v.loc.split(",")[0])}
            lng={Number(v.loc.split(",")[1])}
            text="+"
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
