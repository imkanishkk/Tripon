import React, { useState } from 'react';
import './LoginPopup.css';
import { RiCloseCircleFill } from 'react-icons/ri';

const LoginPopup = ({ setShowlogin }) => {
  const [currState, setCurrState] = useState('Login');

  return (
    <div className="login-popup">
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currState}</h2>
          <RiCloseCircleFill onClick={()=>setShowlogin(false)} className="icon" />
        </div>
        <div className="login-input">
          {currState === 'Login' ? null : <input type="text" placeholder="Your name" required />}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === 'Login' ? (
          <p>
            Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};
export default LoginPopup;
