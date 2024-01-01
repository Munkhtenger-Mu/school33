import React from "react"
import { Nav, NavLink, NavMenu, } from "./NavBarElements"
import logo from "./33logo-removebg-preview.png"
const Navbar = () => {

  return (
    <Nav>
      <NavMenu>
        <a href="http://localhost:3000">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "90px",
              height: "auto",
              marginRight: "80px",
              marginLeft: "20px",
              position: "absolute",
              top: "5px",
            }}
          />
        </a>
        <NavLink style={{ marginLeft: "170px" }} to="/about" activeStyle>
          Бидний тухай
        </NavLink>
        <NavLink to="/academics" activeStyle>
          Академи
        </NavLink>
        <NavLink to="/calendar" activeStyle>
          Календарь
        </NavLink>
        <NavLink to="/ecs" activeStyle>
          Хичээлээс гадуурх 
        </NavLink>
        <NavLink to="/news" activeStyle>
          Мэдээ
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Холбогдох
        </NavLink>
      </NavMenu>
    </Nav>
  )
}

export default Navbar
