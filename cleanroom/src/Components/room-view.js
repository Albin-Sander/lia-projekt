import React, { useState } from 'react'
import room1 from '../images/room1.jpg';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green, white } from '@material-ui/core/colors';

import '../css/room-view.sass'


export default function RoomView() {

    const [checked, setChecked] = React.useState(true);
    let roomAvailable = "This room is available for cleaning"

    const [roomAv, setRoomAv] = useState("Room cleaned");

    const handleChange = (event) => {
    setChecked(event.target.checked);

    if(checked != true) {
        setRoomAv("Room Cleaned")
    } else {
        setRoomAv("Room needs cleaning")
    }
    };

    

    return (
        <div className="room-wrapper">
           
            <img src={room1} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Button
            </button>
            <div>
            <div>
                
                <FormControlLabel
        control={
          <Checkbox
          style={{color: 'white'}}
          labelStyle={{color: 'white'}}
            checked={checked}
            onChange={handleChange}
            name="checkedB"
            // onClick={() => setRoomAv("No need")}
            
          />
        }
        
        label={roomAv}
      />
            </div>
            </div>
            
        </div>
    )
}
