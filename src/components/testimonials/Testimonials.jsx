import React from "react";
import s from "./Testimonials.module.css";
import testimonials from "../../helpers/testimonial"
import Card from "./Card";
import user_photo from "/im_empe_photo.png"
import stars from "/five_stars.svg"

const icon = (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <path
      d="M2.49512 20C2.49512 17 5.49512 11 2.49512 2M9.99512 23.5C14.3285 19.3333 23.1951 9.2 23.9951 2M12.9951 30.5C15.6618 30.5 22.7951 29.1 29.9951 23.5"
      stroke="#FFD600"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const rate= stars

const Testimonials = () => {
  
  return (
    <div className={s.main_container}>
      {/* Title */}
      <div>
        <div className={s.title_c}>
          <span className={s.text_yellow}>
            Testimonios <span className={s.title}>que</span>
            <div className={s.up_icon}>{icon}</div>
          </span>
          <p className={s.title}>hablan de Mis Resultados</p>
          <div className={s.down_icon}>{icon.hero_down}</div>
        </div>
      </div>
      {/* cards hero */}
      <div className={s.down_c}>
        {
          testimonials.map((user)=>(
            <Card
            photo= {user_photo}
            name= {user.name}
            role= {user.role}
            country= {user.country}
            stars= {rate}
            testimony= {user.testimony}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Testimonials;
