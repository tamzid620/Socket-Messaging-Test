import { useEffect, useState } from "react";
import "../src/AppCss/App.css";
import Navbar from "./Components/Navbar/Navbar";
import {posts} from './data'
import Card from "./Components/Card/Card";
import { io } from "socket.io-client";

const App = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null) ;

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("newUser", user);
    }
  }, [socket, user]);
  
  
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
          <Navbar socket={socket}/>
          {posts.map((post) => (
            <Card key={post.id} post={post} user={user} socket={socket} />
          ))}
          {/* <Card /> */}
          <span className="userName"> {user} </span>
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
