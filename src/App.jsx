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
            className="input border border-black rounded-md"
          />

          <button onClick={ () => setUser(userName) } className="button">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
