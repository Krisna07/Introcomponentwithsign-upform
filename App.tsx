import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="pageContainer">
      <div className="introductionContainer">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="formContainer">
        <button className="pageBtn">
          <p>
            <span>Try it for free for 7 days</span> then $20/mo. thereafter
          </p>
        </button>
        <form className="form">
          <label for="firstname">
            <input
              type="text"
              name="firstname"
              className="inputField"
              placeholder="First Name"
            />

            <span className="firstnameErr err">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
              First Name cannot be empty
            </span>
          </label>
          <label for="lastname">
            <input
              type="text"
              name="lastname"
              className="inputField"
              placeholder="Last Name"
            />

            <span className="lastnameErr err">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
              Last Name cannot be empty
            </span>
          </label>
          <label for="email">
            <input
              type="text"
              name="email"
              className="inputField"
              placeholder="Email Address"
            />

            <span className="emailErr err">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
              Looks like this is not an email
            </span>
          </label>
          <label for="password">
            <input
              type="password"
              name="password"
              className="inputField"
              placeholder="Password"
            />
            <span className="passwordErr err">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle fill="#FF7979" cx="12" cy="12" r="12" />
                  <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                  <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
                </g>
              </svg>
              Password cannot be empty
            </span>
          </label>
          <button className="pageBtn">
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
  );
}
