import React from "react";
import s from "./Footer.module.css";
import social_icons from "/all_social_icons.svg";
import instagram from "/instagram_icon.svg";
import tiktok from "/tiktok_icon.svg";

const Footer = () => {
  return (
    <div className={s.main_c}>
      <button className={s.button}>Conectemos</button>
      <div className={s.sub_c}>
        <div className={s.separtor}></div>
        <div className={s.middle_content}>
          <div className={s.middle_left}>
            <span>
              ¡Sígueme en mis redes sociales! Para más tips, contenido exclusivo y
              actualizaciones sobre mis próximos cursos, ¡sígueme en Instagram y TikTok!
              Conéctate conmigo y no te pierdas nada.
            </span>
            <div className={s.social}>
              <a href="https://www.instagram.com/soyempe/?hl=en" target="_blank">
                <img src={instagram} alt="sigueme en instagram en @soyempe" />
              </a>
              <a href="https://www.tiktok.com/@soyempe?_t=ZM-8wuX8yQ2meu&_r=1" target="_blank">
                <img src={tiktok} alt="sigueme en tiktok en @soyempe" />
              </a>
            </div>
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
              <p className={s.text}>soyempe.ch@gmail.com</p>
              <p className={s.text}>
                <a href="https://www.instagram.com/soyempe/?hl=en" target="_blank">
                  Sígueme en Instagram @soyempe
                </a>
              </p>
              <p className={s.text}>
                <a href="https://www.tiktok.com/@soyempe?_t=ZM-8wuX8yQ2meu&_r=1" target="_blank">
                  Sígueme en TikTok @soyempe 
                </a>
              </p>
            </div>
            {/* <div className={s.subscribe}>
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
            </div> */}
          </div>
        </div>
        <div className={s.separtor}></div>
        <div className={s.last_content}>
          <p>Copyright© 2025 Gracia Digital. Todos los derechos reservados.</p>
          <p>Términos y condiciones | Politica de privacidad</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
