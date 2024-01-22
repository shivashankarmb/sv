import React from "react";
import './LoginSing.css';
import email_icon  from '../Assert/email.png';
import user_icon from '../Assert/person.png';
import passwoed_icon from '../Assert/password.png';

const LoginSing=()=>{
    return(
        <div className=" container">
        <div className=" header">
        <div className="text">
            <h1> sing up </h1>
        </div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
        <div className="input">
          <img src={user_icon} alt=""/>
          <input type ="text" placeholder=" username"/>
        </div>
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type ="email" placeholder="email"/>
          </div>
          <div className="input">
          <img src={passwoed_icon}alt=""/>
          <input type ="password" placeholder="password"/>
          </div>
        </div>
        <div className="forget-password">forget password ?<span>ClickHere</span>
        <div className="submit -cotainer">
         <div className="submits">Sing up</div>
         <div className="submitss">Login</div>
         </div>
      </div>
      </div>
    )
}
 export default LoginSing;
 