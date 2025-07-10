import React from "react";

function AuthForm(){
    return(
        <>
         <div className="auth-div">
            <form className="auth-form">
            <h1 className="main-text">Log In</h1>
            <input className="input-box" type="text" placeholder="enter email"></input> <br>
            </br>
            <input className="input-box" type="password" placeholder="enter password"></input> <br></br>
            <button type="submit" className="submit-btn">Submit</button>
         </form>
         </div>
        </>
    )
}
export default AuthForm;