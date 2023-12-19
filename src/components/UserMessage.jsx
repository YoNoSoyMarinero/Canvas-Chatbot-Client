import React from "react";

export const UserMessage = (props) => {
  return (
    <div className="user-message">
      {props.username}👤 <br />
      {props.message}
    </div>
  );
};

export default UserMessage;
