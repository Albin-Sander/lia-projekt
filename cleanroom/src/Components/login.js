import React, { useState } from "react";
import "./login.sass"
import "../App.sass"

function Login() {
    let obj = {name: "Return of the stuff", author: "Robert", type: "epic fantasy", realese: 1902}
    const [clicked, setClicked] = useState(0)
    const [userInput, setUserinput] = useState("")
    /*constructor() {
        constructor(props); {
            super(props);
            this.state = {};
        }*/

    return (
        <div Class="login-container">
            <header Class="login-header">
                <h2>LOGIN</h2>
            </header>
            <main Class="login-main">
                <div Class="inputField-container">
                    <label> Username </label>
                    <input type="text"></input>
                </div>
                <div Class="inputField-container">
                    <label> Password </label>
                    <input type="text"></input>
                </div>
            </main>
            <footer Class="login-foter">
                <button> login </button>
                <button onClick=""> New user </button>
                <checkbox> </checkbox>
                <p> Current state {clicked}</p>
                <button onClick={() => setClicked(1)}></button>
            </footer>
        </div>
    );
        
}

export default Login