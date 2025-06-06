import React, { useEffect, useState } from "react";
import s from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import menu_icon from "/public/menu_icon.svg";
import close_icon from "/public/close_icon.svg";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Inicio");
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const redirect = (e) => {
    if (e === "services") {
      navigate("/services");
    } else if (e === "home") {
      navigate("/");
    } else if (e === "course") {
      navigate("/ugc-course");
    } else if (e === "about") {
      navigate("/about");
    }else if (e === "contact") {
      navigate("/contact");
    }
  };

  const expanded_press = () => {
    setIsExpanded(!expanded);
  };
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={s.main_container}>
      {/* desktop */}
      <div className={s.sub_container} style={{ display: !isMobile ? "" : "none" }}>
        <div
          className={`${s.menu_item} ${activeItem === "Inicio" ? s.active : ""}`}
          onClick={() => {
            handleItemClick("Inicio");
            redirect("home");
          }}
        >
          Inicio
        </div>
        {/* <div
          className={`${s.menu_item} ${activeItem === "Conóceme" ? s.active : ""}`}
          onClick={(e) => {
            handleItemClick("Conóceme");
            redirect("about");
          }}
        >
          Conóceme
        </div> */}
        <div
          className={`${s.menu_item} ${activeItem === "Servicios" ? s.active : ""}`}
          onClick={(e) => {
            handleItemClick("Servicios");
            redirect("services");
          }}
        >
          Asesorías
        </div>
        <div
          className={`${s.menu_item} ${activeItem === "Formaciones" ? s.active : ""}`}
          onClick={(e) => {
            handleItemClick("Formaciones");
            redirect("course");
          }}
        >
          Curso UGC
        </div>
        {/* <div
          className={`${s.menu_item} ${activeItem === "Menbresía" ? s.active : ""}`}
          onClick={() => {handleItemClick("Menbresía"); redirect('membership')}}
        >
          Membresía
        </div> */}
        <div
          className={`${s.menu_item} ${activeItem === "Contacto" ? s.active : ""}`}
          onClick={() => {handleItemClick("Contacto"); redirect("contact");}}
        >
          Contacto
        </div>
      </div>
      {/* mobile */}
      <div
        className={s.sub_container}
        style={{
          backgroundColor: !expanded ? "white" : "",
          display: isMobile ? "" : "none",
          animation: expanded && isMobile ? `${s.slideFromRight} 0.3s ease-in-out` : "",
        }}
      >
        <div onClick={expanded_press} className={s.menu_btn_c}>
          <img
            src={expanded ? close_icon : menu_icon}
            alt="menu icon"
            className={s.icon}
          />
        </div>
        <div className={s.inner_menu_c} style={{ display: expanded ? "block" : "none" }}>
          <div
            className={`${s.menu_item} ${activeItem === "Inicio" ? s.active : ""}`}
            onClick={() => {
              handleItemClick("Inicio");
              redirect("home");
              expanded_press();
            }}
          >
            Inicio
          </div>
          {/* <div
            className={`${s.menu_item} ${activeItem === "Conóceme" ? s.active : ""}`}
            onClick={(e) => {
              handleItemClick("Conóceme");
              redirect("about");
              expanded_press();
            }}
          >
            Conóceme
          </div> */}
          <div
            className={`${s.menu_item} ${activeItem === "Servicios" ? s.active : ""}`}
            onClick={(e) => {
              handleItemClick("Servicios");
              redirect("services");
              expanded_press();
            }}
          >
            Asesorías
          </div>
          <div
            className={`${s.menu_item} ${activeItem === "Formaciones" ? s.active : ""}`}
            onClick={(e) => {
              handleItemClick("Formaciones");
              redirect("course");
              expanded_press();
            }}
          >
            Curso UGC
          </div>
          {/* <div
            className={`${s.menu_item} ${activeItem === "Menbresía" ? s.active : ""}`}
            onClick={(e) => {
              handleItemClick("Menbresía");
              redirect("membership");
              expanded_press();
            }}
          >
            Membresía
          </div> */}
          <div
            className={`${s.menu_item} ${activeItem === "Contacto" ? s.active : ""}`}
            onClick={(e) => {
              handleItemClick("Contacto");
              expanded_press();
            }}
          >
            Contacto
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
