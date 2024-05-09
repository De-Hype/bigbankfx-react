import { useState } from "react";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";


function Login(prop) {

   const [showPassword, setShowPassword] = useState(false);

   function showP() {
    setShowPassword((prev)=> {
        return !prev;
    })
   }
    return (

        <section>
  <Navbar />
           {prop.loadState ?  <div className="loader-box">
                <div className="loader"></div>
            </div>: ""}
        <div className="login">
            <div className="login-left">
                <h1>Welcome <br /> Back</h1>
                <p>it is a long established fact that a reader will be distracted by the readable  content of a page when looking at it's layout. The point of using</p>
                <div className="icons">
                    <i className="bi-facebook"></i>
                    <i className="bi-twitter"></i>
                    <i className="bi-instagram"></i>
                    <i className="bi-youtube"></i>
                </div>
            </div>
            <div className="login-right">
                {prop.showErr ? <div className="error-box">
                 <p>{prop.errText}</p>
                </div>: ""}
                <h1>Sign in</h1>
                <form className="login-form" onSubmit={prop.submitLog}>
                    <div className="fields">
                        <p>Email Address </p>
                        <input type="email"  name="email" onChange={prop.gatherLog} />
                    </div>

                    <div className="fields">
                        <p>Password</p>
                       <div className="pass">
                       <input type={showPassword ? "text" : "password"} name="password" onChange={prop.gatherLog} className="eye-input" /><div className="eye" onClick={showP}>{showPassword ? <i className="bi-eye"></i>: <i className="bi-eye-slash"></i>}</div>
                       </div>
                    </div>

                    <div className="remember-check">
                     <input type="checkbox" />
                     <p>Remember me</p>
                    </div>
                    
                  <NavLink to="../dash"> <button>Sign in now</button> </NavLink> 

                    <h2>Lost your password?</h2>

                    <h3>By clicking on "Sign in now" you agree to <u>Terms of service</u> | <u>Privacy Policy</u></h3>


                </form>

            </div>
        </div>
        </section>
    )
}

export default Login;