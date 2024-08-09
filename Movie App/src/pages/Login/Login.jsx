import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login,signUp } from "../../firebase";
import spinner from "../../assets/netflix_spinner.gif"


const Login = () => {
  const [toogle, setToogle] = useState("Sign In");
  const [name , setName]=useState("")
  const [email , setEmail]=useState("")
  const [pws , setPws]=useState("")
  const [loading , setLoading]=useState(false)
 const userAuth = async (e)=>{
  setLoading(true)
  e.preventDefault()
  if(toogle === "Sign In"){
    await login(email,pws)
  }
  else{
    await signUp(name,email,pws)
  }
  setLoading(false)
 }


  return (
    loading?<div className="login-spinner">
      <img src={spinner} alt="gif" />
    </div>:
    <div className="login">
      <img src={logo} alt="logo" className="login-logo" />
      <div className="login-form">
        <h1>{toogle}</h1>
        <form action="">
          {toogle === "Sign Up" ? (
            <input type="text" placeholder="Username" required value={name} onChange={(e)=>setName(e.target.value)} />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={pws} onChange={(e)=>setPws(e.target.value)} />
          <button onClick={userAuth} type="submit">{toogle}</button>
          <div className="help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {toogle === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={()=>setToogle("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have account? <span onClick={()=>setToogle("Sign In")}>Sign in Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
