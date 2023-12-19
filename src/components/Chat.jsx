import { React, useState } from "react";
import canvasLogo from "../images/canvas-logo.svg";
import Messages from "./Messages";
import Input from "./Input";
import { Comment } from "react-loader-spinner";

export const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Canvas API ChatBot</span>
        <div className="chatIcons">
          <img src={canvasLogo} alt="" />
        </div>
      </div>
      <Messages messages={messages} />
      <div style={{ backgroundColor: "#dddddd" }}>
        <Comment
          visible={true}
          height="31.2px"
          width="30"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color={loading ? "#fff" : "#dddddd"}
          backgroundColor={loading ? "#000" : "#dddddd"}
        />
      </div>
      <Input
        updateMessages={setMessages}
        oldMessages={messages}
        setLoading={setLoading}
        username={props.username}
        token={props.token}
        email={props.email}
        message={props.message}
        setMessage={props.setMessage}
      />
    </div>
  );
};

export default Chat;
