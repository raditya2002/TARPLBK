// Login.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usenavigate=useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
        fetch("http://localhost:8000/user/" + username).then((res) => {
            return res.json();
        }).then((resp) => {
            if (Object.keys(resp).length === 0) {
                toast.error('Please Enter valid username');
            } else {
                if (resp.password === password) {
                    toast.success('Success');
                    sessionStorage.setItem('username',username);
                    sessionStorage.setItem('userrole',resp.role);
                    usenavigate('/')
                }else{
                    toast.error('Please Enter valid credentials');
                }
            }
        }).catch((err) => {
            toast.error('Login Failed due to :' + err.message);
        });
    }
}

const ProceedLoginusingAPI = (e) => {
    e.preventDefault();
    if (validate()) {
        let inputobj={"username": username,"password": password};
        fetch("https://localhost:44308/User/Authenticate",{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(inputobj)
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp)
            if (Object.keys(resp).length === 0) {
                toast.error('Login failed, invalid credentials');
            }else{
                 toast.success('Success');
                 sessionStorage.setItem('username',username);
                 sessionStorage.setItem('jwttoken',resp.jwtToken);
               usenavigate('/')
            }
        }).catch((err) => {
            toast.error('Login Failed due to :' + err.message);
        });
    }
}

  const validate = () => {
    let result = true;
    if (username.trim() === "") {
      result = false;
      toast.warning("Please enter your username");
    }
    if (password.trim() === "") {
      result = false;
      toast.warning("Please enter your password");
    }
    return result;
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-header">User Login</h2>
        <form onSubmit={ProceedLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-info">
            Login
          </button>
        </form>
        <div className="register-link">
          <p>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
