import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        //loged in redirect to homepage
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        //create user and logged in
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
          alt="there is s"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            placeholder="abcdef987"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" className="signin_button" onClick={login}>
            Sign in
          </button>
        </form>
        By signing in you agree to Amazon condition see our privacy and cookies
        notices for details
        <p>
          <button className="Register_button" onClick={register}>
            Create your Amazon Account
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
