import React, { useState } from "react";
import "./login.sass"
import "../App.sass"

function Login() {
    const [clicked, setClicked] = useState(0)
    const [userName, setUsername] = useState("")
    const [userPassword, setUserpassword] = useState("")
    const [isSending, setIsSending] = useState(false)
  

    async function checkUser() {
        const URL = "http://localhost:5000/validation?param=";
        const PARAM = userName

        let response = await fetch(URL + PARAM, {method: "POST"});
        let data = response.json();
        return console.log(data)
    }

    /*useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
          console.log(data);
          setTime(data.time);
        });
      }, []);*/
    

    return (
        <div className="login-container">
            <header className="login-header">
                <h2>LOGIN</h2>
            </header>
            <main className="login-main">
                <div className="inputField-container">
                    <label> Full Name </label>
                    <input type="text" onChange={event => setUsername(event.target.value)}></input>
                </div>
                <div className="inputField-container">
                    <label> Password </label>
                    <input type="text" onChange={event => setUserpassword(event.target.value)}></input>
                </div>
            </main>
            <footer className="login-foter">
            {(userName.length > 0) && (userPassword.length > 0) ? (
                <button className="button-active" onClick={checkUser}> ACTIVE </button>
            ) : (
                <button className="button-inactive"> INACTIVE </button>
            )}
            </footer>
        </div>
    );
        
}

export default Login