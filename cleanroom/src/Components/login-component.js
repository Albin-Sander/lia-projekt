import React, { useState } from "react";
import  { Redirect } from 'react-router-dom'
import "./login.sass"
import "../App.sass"

function LoginView(props) {
    const [clicked, setClicked] = useState(0)
    const [userName, setUsername] = useState("")
    const [userPassword, setUserpassword] = useState("")
    const [wrongCredentials, setWrongcredentials] = useState(false)
  
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
            setWrongcredentials(false)
            sessionStorage.setItem("username", userName)
        } else {
            setWrongcredentials(true)
        }
        console.log(data)
       
        return props.callBack(true)
    }


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
                        {(wrongCredentials) && (userName.length > 0) && (userPassword.length > 0) ? (
                            <label className="wrong-credentials"> Wrong credentials </label>
                        ) : ( <label className="hide">  </label>)}
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
    )
}

export default LoginView