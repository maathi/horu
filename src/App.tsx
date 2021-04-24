import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import VisitsScreen from "./screens/visitsScreen"
import DeviceScreen from "./screens/deviceScreen"
import Sidepanel from "./components/sidepanel"

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container spacing={10}>
          <Grid item md={2} xs={12}>
            <Sidepanel></Sidepanel>
          </Grid>
          <Grid container item md={10} xs={11} spacing={3}>
            <Switch>
              <Route path="/visits" component={VisitsScreen}></Route>
              <Route path="/:name" component={DeviceScreen}></Route>
            </Switch>
          </Grid>
        </Grid>
      </Router>
    </div>
  )
}

export default App
