import React, { Component } from 'react'
import './App.css'
import maya from  './maya.png';
import copyright from './copyright.png';
import resetImage from './resetImage.png';
export default class Reset extends Component {
    
    
    validatePassword = (e) => {
      e.preventDefault();
      const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
     
      const capitalRegex = /[A-Z]/;
      const numberRegex = /[0-9]/;
      const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  
      if (password1 !== password2) {
        alert('Passwords do not match.');
      }
      else if (
        !capitalRegex.test(password1) ||
        !numberRegex.test(password1) ||
        !specialCharRegex.test(password1)
      ) {
        alert('Password must contain at least one capital letter, one number, and one special character.');
        e.preventDefault(); 
      }
        
    }
     
  render()
   {
  
    return (
      <form class="resetForm" onSubmit={this.validatePassword}>
        <div className="container">
        <div className="image-container">
          <img src={resetImage} alt="Your Image" />
        </div>
       <div className="fields-container">
        <div className="logo-container"><img src={maya} className='logoClass'/></div>
        <div className="field">
        <h3>Reset your credential</h3>
      </div>
        <div className="field">
<div className="field1">
  <label for="Password">New Password</label><br/>
  <input style={{width:"378px"}} id="password1"
            type="password" placeholder="Credentials"   minlength="5" required/>
  </div>
  </div>
  <div className="field">
            <div className="field1">
              <label for="Password">Re-Enter Password</label><br/>
              <input style={{width:"378px"}} 
            id="password2" type="password" placeholder="Re-Enter Credentials"   minlength="5" required/>
              </div>
            </div>
<div className="field">
<div className="left">
<input type="submit" value="Submit"/>
</div>
</div>
        <div className="copy-container"><img src={copyright} className="copyClass"/></div>
        </div></div>
      </form>
    )
  }
}