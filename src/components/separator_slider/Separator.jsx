import React from "react";
import Slider from "react-slick";
import s from "./separator.module.css";
import star from "/star.svg";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2700,
    autoplaySpeed: 10,
    cssEase: "linear",
    arrows: false,
  };
  
  return (
    <div className={s.slider_container}>
      <Slider {...settings}>
        <div className={s.item}>
          <span>Diseños</span>
          <img src={star} alt="star" />
        </div>
        <div className={s.item}>
          <span>Asesorías</span>
          <img src={star} alt="star" />
        </div>
        <div className={s.item}>
          <span>UGC</span>
          <img src={star} alt="star" />
        </div>
        <div className={s.item}>
          <span>Mentorías</span>
          <img src={star} alt="star" />
        </div>
        <div className={s.item}>
          <span>Cursos</span>
          <img src={star} alt="star" />
        </div>
        <div className={s.item}>
          <span>Redes Sociales</span>
          <img src={star} alt="star" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
