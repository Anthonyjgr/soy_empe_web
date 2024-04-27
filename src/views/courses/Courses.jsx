import React from "react";
import s from "./Courses.module.css";
import photo_1 from "/public/photo_course_1.png";
import photo_2 from "/public/photo_course_2.png";
import photo_3 from "/public/photo_course_3.png";
import photo_5 from "/public/photo_course_5.png";
import photo_6 from "/public/photo_course_6.png";
import photo_7 from "/public/photo_course_7.png";
import photo_8 from "/public/photo_course_8.png";
import photo_9 from "/public/photo_services_3.png";
import star from "/public/star.svg";
import Separator from "../../components/separator_slider/Separator";

const Courses = () => {
  return (
    <div className={s.main_c}>
      {/* section one */}
      <section className={s.section_c}>
        <div className={s.side_a}>
          <img src={photo_1} alt="section_one_photo" className={s.img} />
        </div>
        <div className={s.side_b}>
          <h1 className={s.h1_one}>
            ¡<span style={{ color: "#ffd600" }}>Domina el UGC </span> y conviértete en un
            creador exitoso!
          </h1>
          <span className={s.span_one}>
            ¿Quieres aprender a crear contenido UGC que atraiga a las marcas y genere
            ingresos?
          </span>
        </div>
      </section>
      {/* section two */}
      <section
        className={s.section_c}
        style={{ backgroundColor: "#F2F4F7", borderRadius: "50px" }}
      >
        <div className={s.side_b_two}>
          <h1 className={s.h1_one}>
            ¡Entonces este curso<span style={{ color: "#ffd600" }}> es para ti!</span>
          </h1>
          <span className={s.span_one}>
            En <b>"UGC para todos"</b>, te enseñaré desde cero todo lo que necesitas saber
            para convertirte en un maestro del UGC (User Generated Content)
          </span>
        </div>
        <div className={s.side_a_two}>
          <img src={photo_2} alt="section_one_photo" className={s.img} />
        </div>
      </section>
      <Separator />
      {/* section three */}
      <section className={s.section_c}>
        <div className={s.side_a_four}>
          <img src={photo_3} alt="section_one_photo" className={s.img} />
        </div>
        <div className={s.side_b}>
          <h2 className={s.title_four}>
            ¿Qué <span style={{ color: "#ffd600" }}> aprenderás </span>
            en este curso?
          </h2>
          <ul>
            <li>Conceptos básicos del UGC.</li>
            <li>Diferencias entre un UGC y un influencer.</li>
            <li>La estructura perfecta para un video UGC.</li>
            <li>La fórmula para un Pitch Perfecto.</li>
            <li>Cómo contactar a las marcas.</li>
            <li>Cómo crear un portafolio.</li>
          </ul>
        </div>
      </section>
      {/* section four */}
      <section className={s.section_c_four}>
        <h1 className={s.h1_four}>Este curso es para ti si:</h1>
        <div className={s.cards_c}>
          <div className={s.card_c}>
            <h2 className={s.card_title}>Eres estudiante</h2>
            <span className={s.card_text}>
              Si estás buscando una forma de ganar dinero extra o iniciar una carrera en
              el marketing digital, el UGC es una excelente opción
            </span>
          </div>
          <div className={s.card_c}>
            <h2 className={s.card_title}>Creadores de contenido</h2>
            <span className={s.card_text}>
              Si ya eres un creador de contenido, puedes aprender a usar el UGC para
              monetizar tu trabajo y llegar a una audiencia más amplia
            </span>
          </div>
          <div className={s.card_c}>
            <h2 className={s.card_title}>Eres mamá</h2>
            <span className={s.card_text}>
              Si estás buscando una forma de ganar dinero extra o iniciar una carrera en
              el marketing digital, el UGC es una excelente opción
            </span>
          </div>
        </div>
      </section>
      <button>QUIERO HACER EL CURSO</button>
      <h2 className={s.title_four_cta} >
        Eleva tu carrera de UGC con mis recursos descargables:
      </h2>
      <h2
        className={s.title_four_cta_2}
      >
        ¡Conviértete en un <span style={{ color: "black" }}> imán </span>
        para las marcas y conquista el mundo del UGC!
      </h2>
      {/* section five */}
      <section className={s.section_c_five}>
        <img src={photo_5} alt="photo_5" className={s.products_img} />
        <img src={photo_6} alt="photo_6" className={s.products_img} />
        <img src={photo_7} alt="photo_7" className={s.products_img} />
        <img src={photo_8} alt="photo_8" className={s.products_img} />
      </section>
      <h1 className={s.title_five}>
        <span>
          <img src={star} alt="star" />
        </span>
        Todo lo que necesitas en un solo lugar
        <span>
          <img src={star} alt="star" />
        </span>
      </h1>
      {/* section six */}
      <section className={s.section_c}>
        <div className={s.side_a_four}>
          <img src={photo_9} alt="section_one_photo" className={s.img} />
        </div>
        <div className={s.side_b}>
          <h2 className={s.title_four}>¡No esperes más!</h2>
          <span className={s.span_one}>
            Invierte en estos recursos y comienza a crear UGC que te permita conseguir más
            clientes, aumentar tus ingresos y alcanzar el éxito que mereces
          </span>
        </div>
      </section>
    </div>
  );
};

export default Courses;
