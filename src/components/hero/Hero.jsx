import React, { useEffect, useState } from "react";
import s from "./Hero.module.css";
import photo from "/hero_photo.png";
import stars from "/stars.svg";
import quote_up from "/quote_up.svg";




const icon = {
  hero_up: (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.49512 20C2.49512 17 5.49512 11 2.49512 2M9.99512 23.5C14.3285 19.3333 23.1951 9.2 23.9951 2M12.9951 30.5C15.6618 30.5 22.7951 29.1 29.9951 23.5"
        stroke="#FFD600"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  hero_down: (
    <svg
      width="74"
      height="85"
      viewBox="0 0 74 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.3106 36.2314C69.6282 43.8914 58.6036 57.529 61.2166 82.1913M54.1233 23.0889C40.7223 31.2977 12.4002 52.1992 6.31995 70.1346M50.3888 3.53325C43.5799 2.03784 24.5811 1.61227 3.05674 11.8733"
        stroke="#FFD600"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={s.main_container}>
      {/* button hola! */}
      <div className={s.button_container}>
        <div className={s.up_icon}>{icon.hero_up}</div>
        <div className={s.button}>Hola!</div>
      </div>
      {/* Soy empe Text */}
      <div className={s.title_c}>
        <span className={s.title}>
          Soy{" "}
          <span className={s.empe}>
            empe<span className={s.comma}>,</span>
          </span>
        </span>
        <p className={s.title_p}>Creadora de Contenido</p>
        {isMobile? "" : <div className={s.down_icon}>{icon.hero_down}</div>}
      </div>
      {/* down hero */}
      <div className={s.hero_down_c}>

        <div className={s.left_c}>
          <img src={quote_up} alt="" />
          <p className={s.h3}>Emprendamos juntos el viaje hacia tus metas digitales. ¡Tu idea + mi experiencia = Éxito digital!</p>
        </div>
        <div className={s.photo_c}>
          <img src={photo} alt="empe_photo" />
          <div className={s.center_circle}></div>
          <div className={s.photo_button_c}></div>
          <button className={s.portfolio_button}>Portafolio</button>
        </div>

        <div className={s.righ_c}>
        <img src={stars} alt="stars" />
          <p>7 Años</p>
          <span className={s.h3}>Experiencia</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
