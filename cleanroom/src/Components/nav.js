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
      <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-indigo-600 dark:bg-gray-800">
          {/* Logo text starts */}
        <div class="flex items-center justify-between mb-4 md:mb-0">
          <h1 class="leading-none text-2xl text-grey-darkest dark:text-green">
            <a class="no-underline text-grey-darkest hover:text-black" href="#">
              Cleanroom
            </a>
          </h1>

          <a class="text-black hover:text-orange md:hidden" href="#">
            <i class="fa fa-2x fa-bars"></i>
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
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
              <Link class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/">Home</Link>
            </li>

            {(!sessionStorage.getItem("username")) ? (
              <li class="md:ml-4">
              <Link to="/login" class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">Login</Link>
              </li>
            ) : (
              <li class="md:ml-4">
              <Link to="/logout" class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">Logout</Link>
              </li>
            )}
            
            <li class="md:ml-4">
              <Link class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/rooms">Rooms</Link>
            </li>   
          </ul>
        </nav>
    </header>
        )
        
}

