import React, { useState } from "react";
import "./LandingPageStyle.scss";

export const LandingPage = (props) => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  const handleStartChating = (event) => {
    event.preventDefault();

    props.setEmail(email);
    props.setUsername(username);
    props.setToken(token);
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span>Canvas Chatbot</span>
        <span>Insert your canvas user email and canvas api token</span>
        <form>
          <input
            type="text"
            placeholder="input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="input your token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <input
            type="text"
            placeholder="input your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleStartChating}>Start chating</button>
        </form>
        <p>Click here to see where to find token!</p>
      </div>
    </div>
  );
};

export default LandingPage;
