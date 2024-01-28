import { useState } from "react";
import "../src/AppCss/App.css";

const App = () => {
  const [userName, setUserName] = useState("");

  // onchange section ---------------
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  // handleSubmit button ----------------
const handleSubmit = () => {
  console.log('userName :', userName);
}


  return (
    <div className="container">
      <div className="login">
        <input
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={handleUserName}
          className="input border border-black rounded-md"
        />

        <button
        onClick={handleSubmit}
         className="button"
         >Login</button>
      </div>
    </div>
  );
};

export default App;
