import { NavLink as Link } from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
  font: 21px futura-pt, sans-serif;
  background: #005387;
  height: 70px;
  width: 100%;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  box-shadow: 0px 0px 2px 0px;
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #f7f7f7;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-left: 10px;

  &.active {
    border-bottom: 6px solid #b5b0a1;
  }
  &:hover {
    border-bottom: 6px solid #b5b0a1;
    margin-bottom: 5px;
    transition: 0.2s;
  }
  transition: 0.2s;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`

