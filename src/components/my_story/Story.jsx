import React, { useEffect, useState } from "react";
import s from "./story.module.css";
import graph from "/my_story_graph.svg";

const Story = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 570);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={s.main_c}>
      <div className={s.up}>
        <span className={s.text_black}>Un poco de </span>
        <span className={s.text_yellow}>mi historia</span>
      </div>
      <span className={s.span}>
        ¡Hola, soy Empe! Soy mamá y creadora de contenido. Hace un tiempo, buscando una
        forma de generar ingresos desde casa, descubrí el mundo del UGC (Contenido
        Generado por el Usuario).Este tipo de marketing permite que las marcas contraten
        a personas como tú y como yo para hacer videos sobre productos o servicios. Y lo
        mejor de todo, ¡te pagan por hacerlo y además te quedas con los productos gratis!
        <br/> <br/>Empecé en esto sin saber nada, pero ahora vivo de crear contenido. Y quiero
        enseñarte a ti todo lo que aprendí en el camino, en solo dos horas, para que
        puedas empezar a generar ingresos desde casa, sin complicaciones.
      </span>
      {/* {!isMobile ? (
        <>
          <div className={s.down}>
            <div className={s.down_left}>
              <div>
                <p className={s.title}>Nueva Esparta, Venezuela</p>
                <p className={s.paragraph}>Junio año 2017</p>
              </div>
              <div>
                <p className={s.title}>Santiago, Chile</p>
                <p className={s.paragraph}>2017 - 2023</p>
              </div>
              <div>
                <p className={s.title}>Pucón, Chile</p>
                <p className={s.paragraph}>Actualidad</p>
              </div>
            </div>
            <div className={s.down_center}>
              <img src={graph} alt="graph" />
            </div>
            <div className={s.down_right}>
              <div>
                <p className={s.title}>Dejarlo todo</p>
                <p className={s.paragraph_two}>
                  Despedirme de toda mi gente y la vida que había hecho en mi tierra no
                  fue nada fácil, pero la situación socioeconómica de mi pais era
                  imposible de sobrellevar.
                </p>
              </div>
              <div>
                <p className={s.title}>Dejarlo todo</p>
                <p className={s.paragraph_two}>
                  Ser inmigrante te prepara para afrontar muchos obstáculos, desarrollas
                  resiliencia y una buena cara ante la vida; eso me ayudó a crecer en este
                  pais, poder brindarle nuevas oportunidades a mi familia y ser mamá (algo
                  que anhelaba con todo mi corazón)
                </p>
              </div>
              <div>
                <p className={s.title}>Empezar de nuevo</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className={s.down}>
          <img src={graph} alt="graph" />
          <div className={s.down_left}>
            <div>
              <p className={s.title}>Nueva Esparta, Venezuela</p>
              <p className={s.paragraph}>Junio año 2017</p>
              <div>
                <p className={s.title}>Dejarlo todo</p>
                <p className={s.paragraph_two}>
                  Despedirme de toda mi gente y la vida que había hecho en mi tierra no
                  fue nada fácil, pero la situación socioeconómica de mi pais era
                  imposible de sobrellevar.
                </p>
              </div>
            </div>
            <div>
              <p className={s.title}>Santiago, Chile</p>
              <p className={s.paragraph}>2017 - 2023</p>
              <div>
                <p className={s.title}>Dejarlo todo</p>
                <p className={s.paragraph_two}>
                  Ser inmigrante te prepara para afrontar muchos obstáculos, desarrollas
                  resiliencia y una buena cara ante la vida; eso me ayudó a crecer en este
                  pais, poder brindarle nuevas oportunidades a mi familia y ser mamá (algo
                  que anhelaba con todo mi corazón)
                </p>
              </div>
            </div>
            <div>
              <p className={s.title}>Pucón, Chile</p>
              <p className={s.paragraph}>Actualidad</p>
              <div>
                <p className={s.title}>Empezar de nuevo</p>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Story;
