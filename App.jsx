import React from "react"
import Home from "./Pages/Home"
import About from "./Pages/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Academics from "./Pages/Academics"
import Calendar from "./Pages/Calendar"
import Ecs from "./Pages/Ecs"
import "./App.css"
import News from "./Pages/News"
import Contanct from "./Pages/Contact"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import logo from "./components/Navbar/33logo-removebg-preview.png"
function App() {
  
  return (
    <div className="Scroll">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/academics" Component={Academics} />
          <Route path="calendar" Component={Calendar} />
          <Route path="ecs" Component={Ecs} />
          <Route path="news" Component={News} />
          <Route path="contact" Component={Contanct} />
        </Routes>
      </Router>
      <footer
        style={{
          height: "50vh",
          backgroundColor: "#304146",
          paddingLeft: "50px",
          display: "flex",
          flexDirection: "row",
          marginTop: "90px",
        }}
      >
        <div>
          <div style={{ width: "90vh", paddingTop: "40px", color: "white" }}>
            
            <p style={{ marginTop: "10px" }}>
              Хаяг: Монгол улс, Улаанбаатар хот, БЗД 3-р хороо, Сансарын
              үйлчилгээний төвийн урд
            </p>
            <p style={{ marginTop: "3px" }}>Утас: 12345678 </p>
            <p style={{ marginTop: "3px" }}>Имэйл: School33@gmail.com</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "0.6rem" }}>
            <a
              className="logo"
              href="https://www.facebook.com/pages/33-%D1%80-%D1%81%D1%83%D1%80%D0%B3%D1%83%D1%83%D0%BB%D1%8C/118849458151500"
            >
              <BiLogoFacebook style={{ height: "auto", width: "30px" }} />
            </a>
            <a className="logo" href="https://www.instagram.com/souz__33/">
              <BiLogoInstagramAlt style={{ height: "auto", width: "30px" }} />
            </a>
          </div>
          <p style={{ marginTop: "40px" }}>
            © 2023 Ерөнхий Боловсролын 33-р сургууль{" "}
          </p>
        </div>
        <div style={{ marginTop: "40px", paddingLeft: "240px" }}>
          <a href="http://localhost:3000">
            <img
              src={logo}
              alt="logo"
              style={{
                width: "200px",
                height: "auto",
              }}
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
