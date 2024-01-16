import React from "react";
import { Link } from "react-router-dom";

export default function Signup(){
    return(
    <div className="signup-cont">
                <div className="signup-img"></div>
        <div className="signup-form">
            <h3>Get started</h3>
            <h4>already have an account? <Link to="/login">Sign in!</Link></h4>
            <form className="inner-signup-form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name"/>
                <label for="email">Email</label>
                <input type="email" id="email" name="email"/>
                <label for="password">password</label>
                <input type="password" id="password" name="password"/>
                <label for="repassword">Repeat password</label>
                <input type="password" id="repassword" name="repassword" className="inp"/>
                <button type="submit">Sign up</button>
            </form>
            <h5>By signing up you agree to our <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Service</span></h5>
        </div>

        
    </div>
    )
}