import React from "react";
import AuthForm from "../components/AuthForm";
import "../styles/auth.css"

function Auth() {
    return (
        <div className="auth-page">
            <div className="carousel-container">
                <div className="carousel-content">
                    <h2 className="feature-text"> feature text</h2>
                    <div className="button-container">
                        <button className="auth-btn" id="login-btn">login</button>
                        <button className="auth-btn" id="signup-btn">signup</button>
                    </div>
                </div>
            </div>
            <AuthForm />
        </div>
    )
}
export default Auth;