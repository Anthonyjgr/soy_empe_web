import React from "react";
import s from "./Card.module.css";

const Card = ({ photo, name, role, country, stars, testimony }) => {
  return (
    <div className={s.main_c}>
      <p className={s.name}>{name}</p>
      <div className={s.photo}>
        <img src={photo} alt="" />
      </div>
      <p className={s.role}>{role}</p>
      <p className={s.country}>{country}</p>
      <img src={stars} alt="" className={s.stars} />
      <p className={s.testimony}>{testimony}</p>
    </div>
  );
};

export default Card;
