import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
       <div className="home-cont">
         <h1>Your favorite recipes, all in one place!</h1>
         <h3>New here? Sign up to start cooking</h3>
         <Link to="/signup">Get started</Link>
       </div>
    )
}

export default Home