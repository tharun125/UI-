import React from "react";
import success from "./success.png";
import maya from  './maya.png';
import copyright from './copyright.png';
import "./App.css";
import { useParams } from 'react-router-dom';

function ResetThanks() {
  const { email } = useParams();
  return (
    <div>
      <form>
    <div className="container">
    <div className="image-container">
    <img src={success} alt="Your Image" />
  </div>
  <div className="fields-container">
        <div className="logo-container"><img src={maya} className='logoClass'/></div>
        {}
{/* ); */}
<div><h4><b>Request access</b></h4></div>
<div><p> Thanks {email} for your intrest,We have<br>
</br><b>requested admin</b> to verify and approval.<br>
</br>Watch out your email with welcome email <br></br>
with magic link for us.
</p></div>
<div className="field">
          <div className="field1">
         <a href="/forgot">Lost your password?</a>
         </div>
        </div>

        <div className="field">
          <div className="field1">
         <a href="/sign-up">Not a member yet? Sign up now.</a>
         </div>
        </div>
          <div className="copy-container"><img src={copyright}/></div>
        </div>
  </div>
  </form>
  </div>
  );
}
export default ResetThanks;

 