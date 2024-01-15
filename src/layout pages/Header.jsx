import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
       <div className="header-cont">
           <h3 className="logo">CB</h3>
           <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/recipes">My recipes</NavLink>
            <NavLink to="/search">New recipes</NavLink>
            <NavLink to="/tips">Cooking tips</NavLink>
           </div>
       </div>
    )
}