
import React, { useEffect, useState } from 'react';
import  { Redirect } from 'react-router-dom'
import LoginComponent from "./Components/login-component";
import './App.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {

  const [] = useState(0)
  const [ifUsername, setIfusername] = useState()

  // Jag vill ha en funktion som kollar om username existerar i sessionStorage
  // Om username existerar i sessionStorage vill jag ha en funktion som kollar om username.lengt är > 0


  function checkIfCredentialsExist() {
    if (sessionStorage.getItem("username")) {
      // Create login session if the user exists
      return 
    }
    else {
      // Do not create a login session if the user did not exist
      return console.log("Returned false: username does not exist ")
    }
  }
  
  useEffect(() => {
    checkIfCredentialsExist()
  })

  useEffect( async () => {
    const URL ="http://localhost:5000/";
    await fetch(URL, { method: "GET"});
    return 
  })
  
  return (
    <Router>
      <div className="view">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {(!sessionStorage.getItem("username")) ? (
              <li>
              <Link to="/login">Login</Link>
              </li>
            ) : (
              <li>
              <Link to="/logout">Logout</Link>
              </li>
            )}

            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            {(!sessionStorage.getItem("username")) ? (
              <LoginComponent callBack={setIfusername}/>
            ) : (
              <Redirect to ="/" />
            )}
          </Route>
          <Route path="/logout">
            <Logout callBack={setIfusername}/>
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  if (sessionStorage.getItem("username")){
    return <h2>You are logged in</h2>
  }
  return <h2>You are not logged in</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Rooms() {
  return <h2>Rooms</h2>;
}

function Logout(props) {
  console.log("Logout")
  sessionStorage.removeItem("username");
  if(!sessionStorage.removeItem("username")) {
    console.log("In the if")
    props.callBack(false)
    return <Redirect to ="/" />
  }
  return <Redirect to ="/" />
}

export default App;
