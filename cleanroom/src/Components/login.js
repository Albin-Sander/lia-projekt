import React from "react";
import "./login.sass"
import "../App.sass"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
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
                    <button> New user </button>
                    <checkbox> </checkbox>
                </footer>
            </div>
        )
    }
}

export default Login