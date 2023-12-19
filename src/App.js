import { LandingPage } from "./pages/LandingPage/LandingPage.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      {token === "" ? (
        <LandingPage
          setEmail={setEmail}
          setToken={setToken}
          setUsername={setUsername}
        />
      ) : (
        <HomePage
          setEmail={setEmail}
          setToken={setToken}
          setUsername={setUsername}
          email={email}
          token={token}
          username={username}
        />
      )}
    </div>
  );
}

export default App;
