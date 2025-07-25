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
          <span className={s.span}>Diseños</span>
          <img src={star} alt="star" className={s.img}/>
          </div>
          <div className={s.item}>
          <span className={s.span}>Asesorías</span>
          <img src={star} alt="star" className={s.img}/>
          </div>
          <div className={s.item}>
          <span className={s.span}>UGC</span>
          <img src={star} alt="star" className={s.img}/>
          </div>
          <div className={s.item}>
          <span className={s.span}>Mentorías</span>
          <img src={star} alt="star" className={s.img}/>
          </div>
          <div className={s.item}>
          <span className={s.span}>Cursos</span>
          <img src={star} alt="star" className={s.img}/>
          </div>
          <div className={s.item}>
          <span className={s.span}>Redes Sociales</span>
          <img src={star} alt="star" className={s.img}/>
        </div> 
      </Slider>
    </div>
  );
}

export default AutoPlay;
