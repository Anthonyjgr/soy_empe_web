import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Home from "./views/home/Home";
import Services from "./views/services_view/Services";
import Footer from "./components/footer/Footer";
import Courses from "./views/courses/Courses";
import About from "./views/about/About";
import Membership from "./views/membership/Membership";

function App() {
  return (
    <div className={s.main_container}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/ugc-course" element={<Courses/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/membership" element={<Membership/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
