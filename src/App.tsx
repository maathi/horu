import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import VisitsScreen from "./screens/visitsScreen"
import DeviceScreen from "./screens/deviceScreen"
import Sidepanel from "./components/sidepanel"
import Container from "@material-ui/core/Container"
import { createMuiTheme } from "@material-ui/core/styles"
import green from "@material-ui/core/colors/green"
import { ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: green[900],
      main: green[700],
      light: green[500],
    },
    secondary: {
      main: green[300],
    },
  },
})

console.log(theme)
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Grid container>
            <Grid
              item
              md={2}
              xs={12}
              // style={{
              //   border: "1px solid red",
              // }}
            >
              <Sidepanel></Sidepanel>
            </Grid>
            <Grid
              container
              item
              md={10}
              xs={12}
              // spacing={}
              // style={{ border: "1px solid blue" }}
            >
              <Container maxWidth="lg">
                <Switch>
                  <Route path="/visits" component={VisitsScreen}></Route>
                  <Route path="/:name" component={DeviceScreen}></Route>
                </Switch>
              </Container>
            </Grid>
          </Grid>
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
