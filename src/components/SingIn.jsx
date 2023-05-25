import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (event) => {
    event.preventDefault();
    let a = {
      email: email,
      password: password,
    };
    let b = JSON.stringify(a);
    console.log(b);
    axios
      .post('http://localhost:4000/api/login', b, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(() => {
        alert('Logged in');
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <>
      <div className="container">
        <form action="" className="form signin" onSubmit={handleLogin}>
          <h2>Sign In</h2>
          <div className="inputFields">
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required="required"
            />
            <span>email</span>
          </div>
          <div className="inputFields">
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required="required"
            />
            <span>password</span>
          </div>
          <div className="inputFields">
            <input type="submit" />
          </div>
          <p>
            Don't have Account ?
            <Link to="/signup" className="login">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
