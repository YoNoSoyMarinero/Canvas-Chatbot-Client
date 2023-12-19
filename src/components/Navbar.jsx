import React from "react";

export const Navbar = (props) => {
  const handleLeaveSession = (event) => {
    props.setEmail("");
    props.setUsername("");
    props.setToken("");
  };

  return (
    <div className="navbar">
      <span className="user-email">{props.email}</span>
      <button onClick={handleLeaveSession}>Leave session</button>
    </div>
  );
};

export default Navbar;
