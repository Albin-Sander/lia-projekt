import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


import hello from './css/App.sass'
import Nav from './Components/nav'
import RoomView from './Components/room-view'



function App() {

  return (
    <Router>
      <Nav/>
    <Switch>
          <Route path="/rooms">
            <RoomView/>
          </Route>
          <Route path="/topics">
            <Nav/>
          </Route>
          <Route path="/">
            <RoomView/>
          </Route>
        </Switch>
        </Router>
  )

}



export default App;
