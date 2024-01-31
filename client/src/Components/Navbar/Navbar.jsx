import "./Navbar.css";
import notification from "../../img/notification.svg";
import message from "../../img/message.svg";
import setting from "../../img/settings.svg";
import { useEffect, useState } from "react";

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);
  console.log("notifications---",notifications);



  return (
    <div className="navbar">
      <span className="logo">Socket app</span>
      <div className="icons">
        {/* notification icon  */}
        <div className="icon">
          <img className="iconImg" src={notification} alt="" />
          <div className="counter">2</div>
        </div>
        {/* message icon  */}
        <div className="icon">
          <img className="iconImg" src={message} alt="" />
          <div className="counter">2</div>
        </div>
        {/* setting icon  */}
        <div className="icon">
          <img className="iconImg" src={setting} alt="" />
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
