import React from "react";
import "./global.scss";

const Register = () => {
  return (
    <div className="regist_container">
      <div className="regist_wrapper">
        <h1>Create an Account</h1>
        <form>
          <input placeholder="name"></input>
          <input placeholder="last name"></input>
          <input placeholder="username"></input>
          <input placeholder="email"></input>
          <input placeholder="password"></input>
          <input placeholder="confirm password"></input>
          <span>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>.
          </span>
          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
