import React, { useEffect, useState } from "react";
import s from "./MyServices.module.css";
import photo from "/service_empe_photo.png";

const MyServices = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={s.main_c}>
      {isMobile ? (
        <>
          <section className={s.c_right}>
            <div className={s.right_up}>
              <span className={s.my}>Mis</span>
              <span className={s.services}>&nbsp;Servicios</span>
            </div>
              <p>
                Llegaste al lugar perfecto para aprender y desarrollarte como un creador
                digital en redes sociales
              </p>
            <div className={s.right_down}>
              <button className={s.btn_item}>Creación de Contenido UGC</button>
              <button className={s.btn_item}>Asesorías Persolanizadas</button>
              <button className={s.btn_item}>Cursos</button>
              <button className={s.btn_item}>Diseño</button>
            </div>
          </section>
          <section className={s.c_left}>
            <img src={photo} alt="services_empe_photo" className={s.photo} />
          </section>
        </>
      ) : (
        <>
          <section className={s.c_left}>
            <img src={photo} alt="services_empe_photo" className={s.photo} />
          </section>
          <section className={s.c_right}>
            <div className={s.right_up}>
              <span className={s.my}>Mis </span>
              <span className={s.services}>Servicios</span>
              <p>
                Llegaste al lugar perfecto para aprender y desarrollarte como un creador
                digital en redes sociales
              </p>
            </div>
            <div className={s.right_down}>
              <button className={s.btn_item}>Creación de Contenido UGC</button>
              <button className={s.btn_item}>Asesorías Persolanizadas</button>
              <button className={s.btn_item}>Cursos</button>
              <button className={s.btn_item}>Diseño</button>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default MyServices;
