import React from "react";
import s from "./Footer.module.css";
import social_icons from "/all_social_icons.svg";

const Footer = () => {
  return (
    <div className={s.main_c}>
      <button className={s.button}>Conectemos</button>
      <div className={s.sub_c}>
        <div className={s.separtor}></div>
        <div className={s.middle_content}>
          <div className={s.middle_left}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
              ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed lobortis orci elementum egestas lobortis.
            </span>
            <img src={social_icons} alt="social icons" />
          </div>
          <div className={s.middle_right}>
            <div className={s.navigation}>
              <p className={s.title}>Navegación</p>
              <p className={s.text}>Inicio</p>
              <p className={s.text}>Conóceme</p>
              <p className={s.text}>Servicios</p>
              <p className={s.text}>Curso UGC</p>
              <p className={s.text}>Membresía</p>
            </div>
            <div className={s.contact}>
              <p className={s.title}>Contacto</p>
              <p className={s.text}>+56 9 7463 1326</p>
              <p className={s.text}>Soyempe.ch@gmail.com</p>
              <p className={s.text}>@soyempe</p>
            </div>
            <div className={s.subscribe}>
              <p className={s.title}>Accede a mis ultimas noticias</p>
              <div className={s.input_group}>
                <input
                  type="email"
                  className={s.input}
                  id="Email"
                  name="Email"
                  placeholder="example@email.com"
                  autocomplete="off"
                />
                <input className={s.button_submit} value="Suscribirme" type="submit" />
              </div>
            </div>
          </div>
        </div>
        <div className={s.separtor}></div>
        <div className={s.last_content}>
          <p>Copyright© 2023 Gracia Digital. All Rights Reserved.</p>
          <p>User Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
