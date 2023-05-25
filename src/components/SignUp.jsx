import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword,setConfirmPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    let a = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    let b = JSON.stringify(a);
    console.log(b);
    axios
      .post('http://localhost:4000/api/register', b, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(() => {
        alert('Registered');
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <div className="container">
        <form action="" className="form signup" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="inputFields">
            <input
              type="text"
              value={firstName}
              required="required"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <span>first name</span>
          </div>
          <div className="inputFields">
            <input
              type="text"
              value={lastName}
              required="required"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
            <span>last name</span>
          </div>
          <div className="inputFields">
            <input
              type="email"
              value={email}
              required="required"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <span>email</span>
          </div>
          <div className="inputFields">
            <input type="password" required="required" onChange={() => {}} />
            <span>password</span>
          </div>
          <div className="inputFields">
            <input
              type="password"
              value={password}
              required="required"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <span>confirm password</span>
          </div>
          <div className="inputFields">
            <input type="submit" />
          </div>
          <p>
            Already a member ?
            <Link to="/signin" className="login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
