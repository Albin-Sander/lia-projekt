import React from 'react'
import RoomView from './room-view'
import LoginComponent from './login'
 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function nav() {
    return (
      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-indigo-600 dark:bg-gray-800">
          {/* Logo text starts */}
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <h1 className="leading-none text-2xl text-grey-darkest dark:text-green">
            <a className="no-underline text-grey-darkest hover:text-black" href="#">
              Cleanroom
            </a>
          </h1>

          <a className="text-black hover:text-orange md:hidden" href="#">
            <i className="fa fa-2x fa-bars"></i>
          </a>
        </div>
      {/* Logo text ends 
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

      */}
  
        <nav>
          <ul className="list-reset md:flex md:items-center">
            <li className="md:ml-4">
              <Link className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/">Home</Link>
            </li>

            {(!sessionStorage.getItem("username")) ? (
              <li classname="md:ml-4">
              <Link to="/login" classname="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">Login</Link>
              </li>
            ) : (
              <li clasName="md:ml-4">
              <Link to="/logout" className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">Logout</Link>
              </li>
            )}

            <li className="md:ml-4">
              <Link className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/rooms">Rooms</Link>
            </li>   
          </ul>
        </nav>
    </header>
        )
        
}

