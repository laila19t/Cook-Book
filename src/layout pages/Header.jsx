import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { slide as Menu } from 'react-burger-menu';

export default function Header(){
    return(
       <div className="header-cont">
        <div style={{display:"flex", alignItems:"center"}}>
        <button><FiMenu /></button>
        <Menu>
      <a className="menu-item" href="/"> Home </a>
      <a className="menu-item" href="/salads"> Salads </a>
      <a className="menu-item" href="/pizzas"> Pizzas </a>
      <a className="menu-item" href="/desserts"> Desserts </a>
    </Menu>
        <h3 className="logo">CB</h3>
           <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/recipes">My recipes</NavLink>
            <NavLink to="/search">New recipes</NavLink>
            <NavLink to="/tips">Cooking tips</NavLink>
           </div>
        </div>
           <NavLink to="/signup"><FaUser/></NavLink>
       </div>
    )
}