import React, { Component } from 'react'
import login from './login.png';
import maya from  './maya.png';
import copyright from './copyright.png';
import "./App.css";
import { useNavigate } from 'react-router-dom';
export default class Login extends Component {
 render() {
  return (
<form>
         <div className="container">
<div className="image-container">
  <img src={login} alt="Your Image" />
</div>
<div className="fields-container">
<div className="logo-container"><img src={maya} className='logoClass'/></div>
        <div className="field">
<div className="field1">
  <label for="username">Login</label><br/>
  <input style={{width:"378px"}} type="email" placeholder="@hdfc.com" required/>
  </div>
</div>
        <div className="field">
<div className="field1">
  <label for="Password">Password</label><br/>
  <input style={{width:"378px"}} type="password" placeholder="Password" required/>
  </div>
</div>
<div className="field">
<div className="left">
<input type="checkbox" id="myCheckbox"/>
<label for="myCheckbox" className="email">Remember me</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="submit" value="Sign in"/>
</div></div>
          <p className="forgot-password text-right">
          Lost your <a href="/forgot">Password?</a>
        </p>
        <p className="left">
          Not a Member Yet? <a href="/sign-up">Request Access?</a>
        </p>
        <div className="copy-container"><img src={copyright}/></div>
        </div>
      </div>
      </form>
    )
  }
}