import React from "react";
import resetthanks from "./resetthanks.png";
import maya from  './maya.png';
import copyright from './copyright.png';
import "./App.css";
import { useParams } from 'react-router-dom';

function ResetThanksFile() {
  const { email } = useParams();
  return (
    <div>
      <form>
    <div className="container">
    <div className="image-container">
    <img src={resetthanks} alt="Your Image" />
  </div>
  <div className="fields-container">
        <div className="logo-container"><img src={maya} className='logoClass'/></div>
        {}
{/* ); */}
<div><h4><b>Forgot Password</b></h4></div>
<div><p> Email has been sent to your inbox({email}) with magic link to reset your credential.<br/>
<br/>
Reset magic link is valid for <b> next 30 Minutes.</b>
</p></div>
<div className="field">
          <div className="field1">
         <a href="/reset">Click here to reset password.</a>
         </div>
        </div>
          <div className="copy-container"><img src={copyright}/></div>
        </div>
  </div>
  </form>
  </div>
  );
}
export default ResetThanksFile;

 