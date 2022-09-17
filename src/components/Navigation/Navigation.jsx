import React from "react";

const Navigation = ({ handleRoute, signedin }) => {
  return signedin ? (
    <nav className="head">
      <p onClick={() => handleRoute("signout")} className="inner">
        Sign Out
      </p>
    </nav>
  ) : (
    <>
      <nav className="head">
        <p onClick={() => handleRoute("signin")} className="inner">
          SignIn</p>
        <p onClick={() => handleRoute("register")} className="inner">
          Register</p>
      </nav>
    </>
  );
};

export default Navigation;
