import React from "react";

export default function DontMiss() {
  return (
    <div className="top">
      <h1>Don't Miss Out!</h1>
      <p className="now">
        Register now and unlock features, abilites and More!
      </p>
      <form>
        <div className="input">
          <label htmlFor="username">username:</label>
          <input type="text" id="username" placeholder="username..." />
        </div>
        <div className="input">
          <label htmlFor="email">email:</label>
          <input type="email" id="email" placeholder="email" />
        </div>
        <div className="input">
          <label htmlFor="passowrd">passowrd:</label>
          <input type="passowrd" id="passowrd" placeholder="password..." />
        </div>
        <div className="input">
          <label htmlFor="confirm">confirm passowrd:</label>
          <input
            type="passowrd"
            id="confirm"
            placeholder="confirm password..."
          />
        </div>
        <div className="btncont">
          <button>Register</button>
        </div>
      </form>
      <p className="dont">
        Already have an account? <a href="#">SignIn</a>
      </p>
    </div>
  );
}
