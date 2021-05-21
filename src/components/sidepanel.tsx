import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"
import { Place, DevicesOther, Dashboard, Visibility } from "@material-ui/icons"

const useStyles = makeStyles({
  panel: {
    position: "sticky",
    top: "1rem",
    paddingRight: "3rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    "& a": {
      color: "grey",
      textDecoration: "none",
    },
  },
  box: {
    padding: "0.5rem 0",
    paddingLeft: "1rem",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    transition: "0.3s",
    display: "flex",
    gap: "0.5rem",
    "&:hover": {
      background: "#21eb32",
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
      <img
        style={{ width: "65%", margin: "2rem auto" }}
        src="horupan.png"
        alt=""
      />
      <Box
        display="flex"
        alignItems="center"
        gridGap="0.5rem"
        className={classes.box}
      >
        <Dashboard />
        <Link to="/dashboard">Dashboard</Link>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        gridGap="0.5rem"
        className={classes.box}
      >
        <Visibility />
        <Link to="/visits">Visits</Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gridGap="0.5rem"
        className={classes.box}
      >
        <DevicesOther />
        <Link to="/devices">Devices</Link>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gridGap="0.5rem"
        className={classes.box}
      >
        <Place />
        <Link to="/map">Map</Link>
      </Box>
    </ul>
  )
}

export default Sidepanel
