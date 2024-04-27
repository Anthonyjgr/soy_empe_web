import React from "react";
import s from "./Services.module.css";
import photo_1 from "/public/photo_services_1.png";
import photo_2 from "/public/photo_services_2.png";
import photo_3 from "/public/photo_services_3.png";
import Separator from "../../components/separator_slider/Separator";
import BulletPoint from "../../components/bullet_points/BulletPoint";

const services = [
  {
    title: "Definir tu nicho y público objetivo",
  },
  {
    title: "Desarrollar una estrategia de contenido UGC",
  },
  {
    title: "Crear contenido atractivo y efectivo",
  },
  {
    title: "Negociar con marcas y cerrar tratos",
  },
  {
    title: "Medir y analizar tus resultados",
  },
];
const Services = () => {
  return (
    <div className={s.main_c}>
      {/* section one */}
      <section className={s.section_c}>
        <div className={s.side_a}>
          <img src={photo_1} alt="section_one_photo" className={s.img}/>
        </div>
        <div className={s.side_b}>
          <button>Asesorías UGC</button>
          <h1 className={s.h1_one}>
            ¿Eres nuevo en el mundo del UGC y te sientes perdido?
          </h1>
          <span className={s.span_one}>
            No te preocupes, ¡no estás solo! Emprender en este apasionante campo puede ser
            desafiante, pero no tiene que serlo. Por eso, he creado mi Asesoría
            Personalizada UGC, un programa diseñado para guiarte paso a paso hacia el
            éxito.
          </span>
        </div>
      </section>
      <Separator />
      {/* section two */}
      <section
        className={s.section_c}
        style={{ backgroundColor: "#F2F4F7", borderRadius: "50px" }}
      >
        <div className={s.side_b_two}>
          <span className={s.span_one}>
            <b>Invertí horas de estudio, dedicación y ensayo y error.</b> Experimenté con
            diferentes estrategias, analicé datos, aprendí de mis errores y poco a poco
            fui construyendo una <b>reputación solida en el mundo del UGC.</b>
          </span>
          <span className={s.span_one}>
            Hoy en día, me dedico por completo a la creación de contenido y he logado el
            alcance que tanto buscaba.
          </span>
          <span className={s.span_one}>
            <b>Sé lo que se siente estar en tu lugar.</b> Sé lo difícil que puede ser{" "}
            <b>despegar en la creación de contenido sin una guía clara.</b> Por eso,
            quiero ofrecerte mi ayuda.
          </span>
        </div>
        <div className={s.side_a}>
          <img src={photo_2} alt="section_one_photo" className={s.img}/>
        </div>
      </section>
      {/* section three */}
      <section className={s.main_c_3}>
        <h3>En solo 1 hora de videollamada</h3>
        <h2 className={s.title}>
          Te <span style={{ color: "#ffd600" }}>ayudaré a</span>:
        </h2>
        <div className={s.bullet_c}>
          {services.map((bullet) => (
            <BulletPoint title={bullet.title} />
          ))}
        </div>
      </section>
      <Separator />
      {/* section four */}
      <section className={s.section_c}>
        <div className={s.side_a_four}>
          <img src={photo_3} alt="section_one_photo" className={s.img}/>
          <button>Agendar mi asesoría</button>
        </div>
        <div className={s.side_b}>
          <h2 className={s.title}>¡Y eso no es todo!</h2>
          <span className={s.span_one}>
            Después de la videollamada, tendrás acceso a 1 mes de seguimiento por
            WhatsApp, donde podrás:
          </span>
          <ul>
            <li>Resolver tus dudas.</li>
            <li>Recibir apoyo personalizado.</li>
            <li>Monitorizar tu progreso.</li>
          </ul>
          <h2 className={s.title_four}>
          ¿Estás listo para dar el <span style={{ color: "#ffd600" }}>en el UGC? </span>:
        </h2>
        </div>
      </section>
    </div>
  );
};

export default Services;
