import React from "react";

export const BotMessage = (props) => {
  return (
    <div className="bot-message">
      <span>
        canvas-🤖 <br /> {props.message} <br />
      </span>
    </div>
  );
};

export default BotMessage;
