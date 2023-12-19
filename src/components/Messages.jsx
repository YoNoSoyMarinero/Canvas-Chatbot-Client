import React from "react";

export const Messages = (props) => {
  return (
    <div className="messages">
      {props.messages.map((element, idx) => (
        <React.Fragment key={idx}>{element}</React.Fragment>
      ))}
    </div>
  );
};

export default Messages;
