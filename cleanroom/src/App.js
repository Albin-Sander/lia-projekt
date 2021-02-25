
import React, { useEffect, useState } from 'react';
import LoginComponent from "./Components/login";
import './App.sass';
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



/*db.getConnection(function(err, connection) {
  if (err) {
    throw console.log("Error when establishing a connection " + err)
  }
  // here u can run queries
  let sql = "CREATE TABLE rooms (Room_id INT NOT NULL UNIQUE AUTO_INCREMENT, Room_nr INT NOT NULL UNIQUE, Room_size VARCHAR(1) NOT NULL, Room_booked INT NOT NULL, Priority_nr INT, Room_ready INT, Room_ready_time DATETIME, Room_start_time DATETIME, Cleaner_reponsible VARCHAR(45) UNIQUE, PRIMARY KEY (Room_id))";
  connection.query(sql, function(err, result) {
    if (err) throw console.log('Error while creating table ' + err)
    console.log('Table "rooms" created')
  })
})*/

function App() {

  const [] = useState(0)
  const [ifUsername, setIfusername] = useState()

  // Jag vill ha en funktion som kollar om username existerar i sessionStorage
  // Om username existerar i sessionStorage vill jag ha en funktion som kollar om username.lengt är > 0


  function checkIfCredentialsExist() {
    if (sessionStorage.getItem("username")) {
      // send user to home screen
      console.log("Returned true: username does exist")
      return setIfusername(true)
    }
    else {
      // send user to login screen

      //let credentials = {userId: 1, username: "Bob", password: "secret", position: "reception"}
      sessionStorage.setItem("username", "")
      return console.log("Returned false: username does not exist ")
    }
  }
  
  useEffect(() => {
    checkIfCredentialsExist()
  })

  useEffect( async () => {
        const URL ="http://localhost:5000/";
  
        let response = await fetch(URL, {method: "GET"});
        let data = response.json();
        return console.log(data)
  })
  
  return (
    <Router>
      <Nav/>
    <Switch>
          <Route path="/rooms">
            <RoomView/>
          </Route>
          <Route path="/Login">
            <LoginComponent/>
          </Route>
          <Route path="/">
            <RoomView/>
          </Route>
        </Switch>
        </Router>
  )

}



export default App;
