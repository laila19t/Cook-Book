import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="signup-cont">
            <div className="signup-img"></div>
            <div className="signup-form">
                <h3>Welcome back!</h3>
                <h4>Don't have an account? <Link to="/signup">Sign up!</Link></h4>
                <form className="inner-signup-form">
                   
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" />
                    <label for="password">password</label>
                    <input type="password" id="password" name="password" />
                    <button type="submit">Sign in</button>
                </form>
                <h5>Forgot your password? <span className="underline">Send us an email.</span> </h5>
            </div>


        </div>
    )
}