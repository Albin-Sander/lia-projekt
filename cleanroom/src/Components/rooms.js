import React from 'react'
import room1 from '../images/room1.jpg'
import room2 from '../images/room2.jpg'
import '../css/room.sass'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function Rooms() {
    return (
        <div>
            <ul>
                <h1>Room 1</h1>
                <Link className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/roomview1"><img src={room1}></img></Link>
            
            <h1>Room 2</h1>
            <Link className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" to="/roomview2"><img src={room2}></img></Link>
            
            </ul>
        </div>
    )
}
