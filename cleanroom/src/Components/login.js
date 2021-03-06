import React, { useState } from "react";
import  { Redirect } from 'react-router-dom'
import LoginView from "../Components/login-component"
import "./login.sass"
import "../App.sass"

function Login() {
    const [clicked, setClicked] = useState(0)
    const [userName, setUsername] = useState("")
    const [userPassword, setUserpassword] = useState("")
    const [isLogedin, setIsLogedin] = useState(false)
  
    console.log(isLogedin)
    async function checkUser() {
        const URL = "http://localhost:5000/validation";
   
        let response = await fetch(URL, {method: "POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ 
            user_name: userName,
            user_password: userPassword
         }) });
        let data = await response.json();
        if (data.status == 200) {
            sessionStorage.setItem("username", userName)
            setIsLogedin(true)
        }
        console.log(data)
        return 
    }

    /*useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
          console.log(data);
          setTime(data.time);
        });
      }, []);*/
    

    return (
        <>
        {(!sessionStorage.getItem("username")) ? (
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
        ) : (
            <Redirect to ="/" />
        )}
        </>
    );
        
}

export default Login