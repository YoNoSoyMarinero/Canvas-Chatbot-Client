import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Chat from "../../components/Chat";
import "./HomePageStyle.scss";

export const HomePage = (props) => {
  const [message, setMessage] = useState("");
  return (
    <div className="home">
      <div className="container">
        <Sidebar
          email={props.email}
          setEmail={props.setEmail}
          setToken={props.setToken}
          setUsername={props.setUsername}
          setMessage={setMessage}
        />
        <Chat
          username={props.username}
          token={props.token}
          email={props.email}
          message={message}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default HomePage;
