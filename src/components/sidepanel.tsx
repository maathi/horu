import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { BiDevices } from "react-icons/bi"
import { BsEyeFill } from "react-icons/bs"
import { AiFillDashboard } from "react-icons/ai"
import { FaMapMarkerAlt } from "react-icons/fa"
import { Box } from "@material-ui/core"
const useStyles = makeStyles({
  panel: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "7rem auto",
    "& a": {
      color: "grey",
      textDecoration: "none",
    },
  },
  box: {
    backgroundColor: "#ededed",
    width: "100%",
    padding: "0.5rem 1rem",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    transition: "0.3s",
    display: "flex",
    gap: "0.5rem",
    "&:hover": {
      background: "green",
      transition: "0.3s",
      "& a": {
        color: "white",
      },
    },
  },
})

const Sidepanel = () => {
  const classes = useStyles()
  return (
    <ul className={classes.panel}>
      <Box
        display="flex"
        alignItems="center"
        gridGap="0.5rem"
        className={classes.box}
      >
        <AiFillDashboard />
        <Link to="/dashboard">Dashboard</Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gridGap="0.5rem"
        className={classes.box}
      >
        <BsEyeFill />
        <Link to="/visits">Visits</Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gridGap="0.5rem"
        className={classes.box}
      >
        <BiDevices />
        <Link to="/devices">Devices</Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gridGap="0.5rem"
        className={classes.box}
      >
        <FaMapMarkerAlt />
        <Link to="/map">Map</Link>
      </Box>
    </ul>
  )
}

export default Sidepanel
