import React from "react";
import s from "./Courses.module.css";
import photo_1 from "/ugc-header.webp";
import photo_2 from "/photo_course_2.png";
import photo_3 from "/photo_course_3.png";
import photo_5 from "/photo_course_5.png";
import photo_6 from "/photo_course_6.png";
import photo_7 from "/photo_course_7.png";
import photo_8 from "/photo_course_8.png";
import photo_9 from "/photo_services_3.png";
import star from "/star.svg";
import Separator from "../../components/separator_slider/Separator";
import { Link } from "react-router-dom";

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
            ¿<span style={{ color: "#ffd600" }}>Sabías que puedes ganar dinero </span>{" "}
            desde casa sin ser influencer?
          </h1>
          <span className={s.span_one}>
            Las marcas están buscando personas como tú y yo para que hagamos videos
            recomendando sus productos. No necesitas ser un experto, solo ser auténtico y
            mostrar lo que te gusta. ¡Las empresas te pagan por eso!
          </span>
        </div>
      </section>
      {/* section two */}
      <section
        className={s.section_c}
        style={{ backgroundColor: "#F2F4F7", borderRadius: "50px", marginTop: "100px" }}
      >
        <div className={s.side_b_two}>
          <h1 className={s.h1_one}>
            ¿Te imaginas recibir productos gratis
            <span style={{ color: "#ffd600" }}>
              {" "}
              y que te paguen por compartir tu experiencia?
            </span>
          </h1>
          <span className={s.span_one}>
            Así es como funciona el <b>UGC (User Generated Content)</b>. Las marcas te
            pagan para que hagas videos genuinos sobre sus productos, y tú te quedas con
            todo lo que recibas. ¡Y ni hablar de los pagos que puedes recibir!
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
            <li>Tipos de nichos en UGC y cómo elegir el tuyo.</li>
            <li>Cómo crear la fórmula perfecta para tus videos.</li>
            <li>Cómo hacer un portafolio que atraiga marcas.</li>
            <li>Cómo negociar con marcas y emprendedores.</li>
            <li>Trucos para grabar videos que capturen atención.</li>
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
      {/* section five */}
      {/* <h2 className={s.title_four_cta} >
        Eleva tu carrera de UGC con mis recursos descargables:
      </h2>
      <h2
        className={s.title_four_cta_2}
      >
        ¡Conviértete en un <span style={{ color: "black" }}> imán </span>
        para las marcas y conquista el mundo del UGC!
      </h2>
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
      </h1> */}
      {/* section six */}
      <section className={s.section_c}>
        <div className={s.side_a_four}>
          <img src={photo_9} alt="section_one_photo" className={s.img} />
        </div>
        <div className={s.side_b}>
          <h2 className={s.title_four}>¿Estás listo para empezar?</h2>
          <span className={s.span_one}>
            Si quieres aprender cómo generar ingresos desde casa sin rodeos, sin trucos y
            de manera real, esta Masterclass es para ti. Los cupos son limitados, así que
            no esperes más.
          </span>
          <Link to="/checkout">
            <button>INSCRIBIRME EN LA MASTERCLASS</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses;
