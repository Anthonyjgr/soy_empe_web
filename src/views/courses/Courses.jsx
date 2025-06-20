import React from "react";
import s from "./Courses.module.css";
import photo_1 from "/ugc-1.webp";
import photo_2 from "/ugc-2.webp";
import photo_3 from "/ugc-3.webp";
import photo_9 from "/ugc-4.webp";
import star from "/star.svg";
import Separator from "../../components/separator_slider/Separator";
import { Link } from "react-router-dom";
import CountdownBar from "../../components/Counter";
import Seo from "../../components/GTM/Seo"

const Courses = () => {
  return (
    <div className={s.main_c}>
      <Seo
        title="Masterclass | Soyempe"
        description="Aprende y crece con las Masterclass de Soyempe. Capacítate en estrategias digitales, marketing y gestión para llevar tu marca personal, empresa o cuenta de Instagram/TikTok al siguiente nivel."
        url="https://www.www.soyempe.com/ugc-course"
      />
      {/* section one */}
      <section className={s.section_c}>
        <div className={s.side_a}>
          <img src={photo_1} alt="section_one_photo" className={s.img} />
        </div>
        <div className={s.side_b}>
          <h1 className={s.h1_one}>
            ¿<span style={{ color: "#BDA896" }}>Sabías que puedes ganar dinero </span>{" "}
            desde casa sin ser influencer?
          </h1>
          <span className={s.span_one}>
            Las marcas están buscando personas como tú y yo para que hagamos videos
            recomendando sus productos. No necesitas ser un experto, solo ser auténtico y
            mostrar lo que te gusta. ¡Las empresas te pagan por eso!
          </span>
        </div>
      </section>

      {/* countdown */}
      <div className={s.counter}>
        <CountdownBar />
      </div>
      {/* section two */}
      <section
        className={s.section_c}
        style={{ backgroundColor: "white", borderRadius: "50px" }}
      >
        <div className={s.side_b_two}>
          <h1 className={s.h1_one}>
            ¿Te imaginas recibir productos gratis
            <span style={{ color: "#BDA896" }}>
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
      <div style={{ zIndex: 30, width: "100%" }}>
        <Separator />
      </div>
      {/* section three */}
      <section className={s.section_c}>
        <div className={s.side_a_four}>
          <img src={photo_3} alt="section_one_photo" className={s.img} />
        </div>
        <div className={s.side_b}>
          <h2 className={s.title_four}>
            ¿Qué <span style={{ color: "#BDA896" }}> aprenderás </span>
            en esta Masterclass?
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
        <h1 className={s.h1_four}>Esta Masterclass es para ti si:</h1>
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
        <div className={s.side_a_four2}>
          <img src={photo_9} alt="section_one_photo" className={s.img} />
          <Link to="/checkout" className={s.cta}>
            <button>INSCRIBIRME EN LA MASTERCLASS</button>
          </Link>
        </div>
        <div className={s.side_b}>
          <h2 className={s.title_four}>¿Estás listo para empezar?</h2>
          <span className={s.span_one}>
            Si quieres aprender cómo generar ingresos desde casa sin rodeos, sin trucos y
            de manera real, esta Masterclass es para ti. Los cupos son limitados, así que
            no esperes más.
          </span>
          <div style={{ display: "flex", gap: "10px" }} className={s.price}>
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>Por tan solo</span>
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>40.000 CLP</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
