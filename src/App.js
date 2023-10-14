import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import SuccessMessage from "./SuccessMessage";
import Login from "./Login";
import Forgot from "./Forgot";
import Reset from "./Reset";
import ResetThanksFile from "./ResetThanksFile";
import { BrowserRouter as Router, Routes, Route, Link,Switch } from "react-router-dom";

function App() {
 
return( <Router>
<Routes>

<Route exact path="/" element={<Login />} />

<Route path="/sign-in" element={<Login />} />

<Route path="/sign-up" element={<RegistrationForm />} />
<Route path="/success" element={<SuccessMessage />} />
<Route path="/forgot" element={<Forgot />} />
<Route path="/reset" element={<Reset />} />
<Route path="/success/:name" element={<SuccessMessage/>} />
<Route path="/reset/:email" element={<ResetThanksFile/>} />

{/* <Route path="/sign-up" element={<SignUp />} /> */}

{/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

</Routes>
</Router>)
  // return (
  //  <div>
  //    {isRegistered ? <SuccessMessage /> : <RegistrationForm onRegistration={handleRegistration} />}
  //   </div>
  // );
  }

export default App;
