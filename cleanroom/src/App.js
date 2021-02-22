import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.sass';
import Nav from './Components/nav'



function App() {

  return (
    <div>
      <Nav/>
    </div>
  )
}



export default App;
