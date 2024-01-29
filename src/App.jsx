import { useState } from "react";
import "../src/AppCss/App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");

  // onchange section ---------------
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  // handle login button -------------
  const handleLogin =() => {
    setUser(userName)
  }
  // enter key button tactic ------------
  const handleEnter = (event) => {
    if(event.key ==="Enter"){
      handleLogin();
    }
  }

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          <Card />
          <span className="userName">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={handleUserName}
            onKeyDown={handleEnter}
            className="input border border-black rounded-md"
          />

          <button onClick={ handleLogin } className="button">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
