import React from "react";
import Hero from "../../components/hero/Hero";
import s from "./Home.module.css";
import Story from "../../components/my_story/Story";
import ImThePerson from "../../components/im_the_person/Im_the_person";
import Testimonials from "../../components/testimonials/Testimonials";
import Social_media_cta from "../../components/social_media_cta/Social_media_cta";
import banner from "/section_banner.svg";
import Footer from "../../components/footer/Footer";
import Separator from "../../components/separator_slider/Separator";
import MyServices from "../../components/my_services/MyServices";
import Seo from "../../components/seo/Seo.jsx"


const Home = () => {
  return (
    <div className={s.main_container}>
      <Seo
        title="Inicio Soyempe | Impulsa Tu Marca y Negocio"
        description="Soyempe, desde Chile, te ayudamos a potenciar tu marca personal o negocio. Ofrecemos estrategias de crecimiento y gestión digital para tu empresa, cuenta de Instagram o TikTok, sin importar dónde estés."
        url="https://www.soyempe.com/"
      />
      <Hero />
      <Separator />
      <MyServices />
      <Story />
      {/* <ImThePerson/> */}
      {/* <Social_media_cta/> */}
      {/* <Testimonials/> */}
      {/* <img src={banner} alt="" /> */}
    </div>
  );
};

export default Home;
