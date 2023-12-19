import React from "react";
import { Navbar } from "./Navbar";
import Info from "./Info";

export const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <Navbar
        email={props.email}
        setEmail={props.setEmail}
        setToken={props.setToken}
        setUsername={props.setUsername}
      />
      <Info setMessage={props.setMessage} />
    </div>
  );
};

export default Sidebar;
