import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Register.css";
import RegisterLogic from "../services/RegisterLogic";

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = { id, name, password, email };
    RegisterLogic.handleRegisterLogic(regObj, navigate);
};

  useEffect(() => {
    if (sessionStorage.getItem("username")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="register-container">
      <div className="register-form">
        <h1 className="register-header">User Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="register-group">
            <label htmlFor="id">User Name</label>
            <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} className="form-control" />
          </div>
          <div className="register-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
          </div>
          <div className="register-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
          </div>
          <div className="register-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
          </div>
          <button type="submit" className="btn-info">
            Register
          </button>
        </form>
        <div className="login-link">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
