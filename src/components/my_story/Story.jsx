import React from "react";
import s from "./story.module.css";
import graph from "/my_story_graph.svg";

const Story = () => {
  return (
    <div className={s.main_c}>
      <div className={s.up}>
        <span className={s.text_black}>Un poco de </span>
        <span className={s.text_yellow}>mi historia</span>
      </div>
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
            <p className={s.paragraph_two}>Despedirme de toda mi gente y la vida que había hecho en mi tierra no fue nada fácil, pero la situación socioeconómica de mi pais era imposible de sobrellevar.</p>
          </div>
          <div>
            <p className={s.title}>Dejarlo todo</p>
            <p className={s.paragraph_two}>Ser inmigrante te prepara para afrontar muchos obstáculos, desarrollas resiliencia y una buena cara ante la vida; eso me ayudó a crecer en este pais, poder brindarle nuevas oportunidades  a mi familia y ser mamá (algo que anhelaba con todo mi corazón)</p>
          </div>
          <div>
            <p className={s.title}>Empezar de nuevo</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
