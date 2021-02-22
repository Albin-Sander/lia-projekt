import React from 'react'

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
        <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
    
    {/* Logo text starts */}
  <div class="flex items-center justify-between mb-4 md:mb-0">
    <h1 class="leading-none text-2xl text-grey-darkest">
      <a class="no-underline text-grey-darkest hover:text-black" href="#">
        Cleanroom
      </a>
    </h1>

    <a class="text-black hover:text-orange md:hidden" href="#">
      <i class="fa fa-2x fa-bars"></i>
    </a>
  </div>
{/* Logo text ends */}
  
<nav>
    <Router>
      <div>
      <ul class="list-reset md:flex md:items-center">
      <li class="md:ml-4">
            <Link class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/">Home</Link>
          </li>
          <li class="md:ml-4">
            <Link class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/about">About</Link>
          </li>
          <li class="md:ml-4">
            <Link class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </nav>
    </header>
    )

    function Home() {
        return <h2>Home</h2>;
      }
      
      function About() {
        return <h2>About</h2>;
      }
      
      function Topics() {
        return <h2>Users</h2>;
      }
}
