import React from 'react'
import s from "./Social_media_cta.module.css"
import icon from "/mail_circle_icon.svg"

function Social_media_cta() {
  return (
    <div className={s.main_c}>
      <h1 className={s.text_black}>¿Necesitas asesoría para tus Redes Sociales? </h1>
      <h1 className={s.text_yellow}>Yo te ayudo</h1>
      <div className={s.input_c}>
        <img src={icon} alt="mail_icon" className={s.icon}/>
        <input type="text"  className={s.input}/>
        <button className={s.button}>Enviar</button>
      </div>
    </div>
  )
}

export default Social_media_cta