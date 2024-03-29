import React, { useEffect } from "react";

import { useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export default function App() {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [submit, setSubmit] = useState<string>();
  useEffect(() => {
    setTimeout(() => {
      if (submit) {
        setSubmit("");
      }
    }, 20000);
  }, [submit]);
  const regex = /^\w+([-]?\w+)*@\w+(.-]?\w+)*(\.\w{2,3})+$/;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user.firstName) {
      setErr((prevState) => ({ ...prevState, firstName: true }));
    }

    if (!user.lastName) {
      setErr((prevState) => ({ ...prevState, lastName: true }));
    }

    if (!regex.test(user.email)) {
      setErr((prevState) => ({ ...prevState, email: true }));
    }

    if (!user.password) {
      setErr((prevState) => ({ ...prevState, password: true }));
    }

    if (
      regex.test(user.email) &&
      user.password &&
      user.firstName &&
      user.lastName
    ) {
      setSubmit(
        `Congratualtion ${
          user.firstName + " " + user.lastName
        }. You have unlocked 7 days of free trial. `
      );
    }
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  const svg = (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <circle fill="#FF7979" cx="12" cy="12" r="12" />
        <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
        <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
      </g>
    </svg>
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser((prevState) => ({ ...prevState, [name]: value }));
    setErr((prevState) => ({ ...prevState, [name]: false }));
  };
  return (
    <div className="page">
      <div className="pageContainer">
        <div className="introductionContainer">
          <h1>Learn to code by watching others</h1>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="formContainer">
          <button className="pageBtn">
            <p>
              <span>Try it for free for 7 days</span> then $20/mo. thereafter
            </p>
          </button>
          <form className="form" onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                name="firstName"
                className="inputField"
                placeholder="First Name"
                value={user.firstName}
                onChange={handleInputChange}
              />

              <span
                className="FirstName err"
                style={err.firstName ? { display: "block" } : {}}
              >
                {svg}
                First Name cannot be empty
              </span>
            </label>
            <label>
              <input
                type="text"
                name="lastName"
                className="inputField"
                value={user.lastName}
                placeholder="Last Name"
                onChange={handleInputChange}
              />

              <span
                className="lastName err"
                style={
                  err.lastName ? { display: "block" } : { display: "none" }
                }
              >
                {svg}
                Last Name cannot be empty
              </span>
            </label>
            <label>
              <input
                type="text"
                name="email"
                className="inputField"
                value={user.email}
                placeholder="Email Address"
                onChange={handleInputChange}
              />

              <span
                className="email err"
                style={err.email ? { display: "block" } : {}}
              >
                {svg}
                Looks like this is not an email
              </span>
            </label>
            <label>
              <input
                type="password"
                name="password"
                className="inputField"
                value={user.password}
                placeholder="Password"
                onChange={handleInputChange}
              />
              <span
                className="password err"
                style={err.password ? { display: "block" } : {}}
              >
                {svg}
                Password cannot be empty
              </span>
            </label>
            <button className="pageBtn" type="submit">
              <p>
                <span>CLAIM YOUR FREE TRIAL</span>
              </p>
            </button>
            <span className="termsCon">
              By clicking the button you are agreeing to our
              <span>Terms and Conditions</span>
            </span>
          </form>
        </div>
      </div>
      <div
        className="congratulation"
        style={{ opacity: `${submit ? "1" : "0"}` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="tickIcon"
        >
          <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
        <span className="appendable">{submit ? submit : ""}</span>
      </div>
    </div>
  );
}
