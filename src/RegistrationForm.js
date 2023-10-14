import React, { useState } from "react";
import login from "./register.png";
import maya from "./maya.png";
import copyright from "./copyright.png";
import "./App.css";
import { Link, useNavigate } from 'react-router-dom';


function RegistrationForm() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const handleRegistration = () => {
    // Perform registration logic here

    // After a successful registration, navigate to the success route
    navigate(`/success/${name}`);
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <div className="container">
          <div className="image-container">
            <img src={login} alt="Your Image" />
          </div>
          <div className="fields-container">
          <div className="logo-container"><img src={maya} className='logoClass'/></div>
          <div><h4><b>Request for access</b></h4></div>
            <div className="field2">
              <div className="field1">
              <label for="username">Name</label><br/>
              <input style={{width:"378px"}} type="text" onChange={(e) => setName(e.target.value)} placeholder="Full Name" required/>
              </div>
            </div>
            <div className="field2">
            <div className="field1">
              <label for="username" >Email Id</label><br/>
              <input style={{width:"378px"}} type="email" placeholder="@hdfc.com" required/>
              </div>
            </div>
            <div className="field2">
            <div className="field1">
              <div className="field3">
              <label for="Password">Password</label><br/>
              <input type="password" style={{width:"378px"}} placeholder="Password" required/>
              </div></div>
            </div>
            <div className="field2">
            <div className="field1">
            <label for="Reason">Reason for request</label><br/>
            <textarea id="reason" name="reason" placeholder="Brief your Requirements and Approval.." rows="4" cols="50"></textarea>
            </div>
            </div>
            <div className="field2">
            <div className="left">
            <input type="checkbox" id="myCheckbox"/>
            <label for="myCheckbox" className="email">Send me a email copy</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="submit" value="Submit"/>
        </div></div>
            <div className="copy-container"><img src={copyright}/></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
