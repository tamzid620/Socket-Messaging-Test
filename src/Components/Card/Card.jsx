import "./Card.css";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heartFilled.svg";
import Comment from "../../img/comment.svg";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import { useEffect, useState } from "react";

const Card = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetch("info.json")
      .then((res) => res.json())
      .then((data) => setInfos(data));
  }, []);
  console.log(infos);

  return (
    <div className="card">
      {infos.map((info) => (
        <div key={info.id}>
          <div className="info">
            <img src={info.userImg} alt="" className="userImg" />
            <span>{info.fullname}</span>
          </div>
          <img src={info.postImg} alt="" className="postImg" />
          <div className="interaction">
            <img src={Heart} alt="" className="cardIcon" />
            <img src={Comment} alt="" className="cardIcon" />
            <img src={Share} alt="" className="cardIcon" />
            <img src={Info} alt="" className="infoIcon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
