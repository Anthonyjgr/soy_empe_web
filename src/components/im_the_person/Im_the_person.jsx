import React from 'react'
import s from "./Im_the_person.module.css"
import photo from "/im_empe_photo.png"

const Im_the_person = () => {
  return (
    <div className={s.main_c}>
      <div className={s.c_left}>
        <img src={photo} alt="services_empe_photo" className={s.photo} />
      </div>
      <div className={s.c_right}>
        <div className={s.right_up}>
          <span className={s.text_blak}>¡Soy la persona que </span>
          <span className={s.text_yellow}>necesitas!</span>
          <p className={s.paragraph}>
          Soy alguien que siempre busca dar lo mejor, soy creativa, responsable y me organizo muy bien. Me encanta trabajar en equipo y crear buen ambiente. ¡Conmigo tus proyectos serán un éxito!
          </p>
        </div>
        <div className={s.right_down}>
          <div className={s.kpi_c}>
            <div className={s.kpi}>
              <p className={s.text_number}>+15</p>
              <p className={s.text_description}>Servicios UGC</p>
            </div>
            <div className={s.kpi}>
              <p className={s.text_number}>+25</p>
              <p className={s.text_description}>Proyectos Completados</p>
            </div>
          </div>
          <button>¡Conectemos!</button>
        </div>
      </div>
    </div>
  );
}

export default Im_the_person