import React, { useState } from "react";
import "./global.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login_container">
      <div className="login_wrapper">
        <h1>Sign In</h1>
        <form>
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick} disabled={isFetching}>
            Login
          </button>
          {error && <span>Something went wrong.</span>}
          <Link>Forget Your Password?</Link>
          <Link>Create a New Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
