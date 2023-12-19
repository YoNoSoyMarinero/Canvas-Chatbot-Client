import React, { useState } from "react";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";

export const Input = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDisable = () => {
    setIsDisabled(true);
  };

  const handleEnable = () => {
    setIsDisabled(false);
  };

  const sendMessage = (e) => {
    if (e.key !== "Enter" && e.type !== "click") {
      return;
    }
    handleDisable();
    props.setMessage("");
    props.setLoading(true);
    props.updateMessages([
      ...props.oldMessages,
      <UserMessage message={props.message} username={props.username} />,
    ]);

    const body = {
      user_name: props.username,
      user_email: props.email,
      token: props.token,
      message_text: props.message,
    };

    let headers = new Headers();
    headers.append("Content-type", "application/json");
    fetch("http://localhost:3333/chatbot", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        props.updateMessages([
          ...props.oldMessages,
          <UserMessage message={props.message} username={props.username} />,
          <BotMessage message={data.readable_message} />,
        ]);
        props.setLoading(false);
        handleEnable();
      })
      .catch((e) => {
        props.setLoading(false);
        handleEnable();
        console.log("Error: ", e);
      });
  };

  return (
    <div className="input">
      <textarea
        disabled={isDisabled}
        type="text"
        onChange={(e) => props.setMessage(e.target.value)}
        value={props.message}
        onKeyDown={sendMessage}
      />
      <div className="send">
        <button id="send-button" disabled={isDisabled} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
