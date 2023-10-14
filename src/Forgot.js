import maya from  './maya.png';
import copyright from './copyright.png';
import forgotimage from './forgotImage.png';
import "./App.css";
import { useNavigate } from 'react-router-dom';
import React,{ useState } from 'react'
function Forgot(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const handleReset = () => {
      navigate(`/reset/${email}`);
    };
     return(
      <div>
      <form onSubmit={handleReset}>
        <div className="container">
        <div className="image-container">
          <img src={forgotimage} alt="Your Image" />
        </div>
        <div className="fields-container">
        <div className="logo-container"><img src={maya} className='logoClass'/></div>
        <div className="field">
        <h3>Forgot Password</h3>
        </div>
        <div className="field">
            <div className="field1">
              <label for="Email">Email Id</label><br/>
              <input style={{width:"378px"}} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="@hdfc.com" required/>
              </div>
            </div>
        <div className="field">
        <div className="field1">
        <input type="submit" value="Reset"/>
        </div>
        </div>
        <div className="field">
          <div className="field1">
         Go back to <a href="/sign-in">Login?</a>
         </div>
        </div>
        <div className="field">
        <div className="copy-container"><img src={copyright} className="copyClass"/></div>
        </div>
        </div>
        </div>
      </form>
</div>
      )
      };
export default Forgot;