import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles//Login.css";
import LoginLogic from "../services/LoginLogic";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    LoginLogic.proceedLogin(username, password, usenavigate);
  };

  useEffect(() => {
    const loggedInUsername = sessionStorage.getItem("username");
    if (loggedInUsername) {
      usenavigate("/");
    }
  }, [usenavigate]);

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-header">User Login</h2>
        <form onSubmit={ProceedLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
          </div>
          <button type="submit" className="btn-info">
            Login
          </button>
        </form>
        <div className="register-link">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
