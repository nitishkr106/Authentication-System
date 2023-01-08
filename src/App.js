import {useState} from 'react';
import { authentication } from './firebase-config';
import { RecaptchaVerifier,signInWithPhoneNumber,  } from "firebase/auth";
import './App.css';
function App()
{
  const countryCode="+917366016497";
  const[phoneNumber,setPhoneNumber]= useState(countryCode);
  const[expandForm,setExpandForm]=useState(false);
  const[OTP,setOTP]=useState('')
  const [cr,setCR]= useState({})

const generateRecaptcha = ()=>{
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    'size': 'normal',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      // ...
    },
    'expired-callback': () => {
      // Response expired. Ask user to solve reCAPTCHA again.
      // ... change krdo isko  to use VISIBLE CAPTCHA WLAA  
    }
  }, authentication);
  
}

  const requestOTP=(e)=>{
    e.preventDefault();
    if(phoneNumber.length>=12){
      setExpandForm(true);
      generateRecaptcha();
      let appVerifier= window.recaptchaVerifier;
      signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
      .then(confirmationResult =>{
      
        window.confirmationResult=confirmationResult;
        setCR(confirmationResult)
      }).catch((error)=>{
        console.log(error);
      });
    }
  }
  const verifyOTP1=(e)=>{
  
    cr
    .confirm(OTP)
    .then(function(result) {
      var user = result.user;
      console.log(user);
      if(user)
      {
      window.alert("otp is correct")
      }
    })
    .catch(function(error) {
      window.alert("otp is incorrect")
      console.log(error);
    });
   
  }

  // const verifyOTP=(e)=>{
  //   let otp =e.target.value;
  //   setOTP(otp);
  //   if(otp.length === 6)
  //   {
  //   let confirmationResult = window.confirmationResult;
  //   confirmationResult.confirm(otp).then((result) => {
    
  //     // User signed in successfully.
  //     const user = result.user;
  //     // ...
  //   }).catch((error) => {
  //     // User couldn't sign in (bad verification code?)
  //     // ...
  //   });
  //   }}
return(
  <div className='formcontainer'>
    <form onSubmit={requestOTP}>
      <h1 >INFORMATION SECURITY COURSE PROJECT</h1>
      <div className="main">
      <label htmlFor="phoneNumberInput" className="form-label">Please enter your Phone number</label>
      <input type="tel" className="form-control" id="phoneNumberInput" aria-describedby="emailhelp" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
      <div id="phoneNumberHelp" className="form-text"> </div>
      </div>
      
      {expandForm === true?
      <>
      <div className="main">
      <label htmlFor="otpInput" className="form-label">Please enter your OTP</label>
      <input type="number" className="form-control" id="otpInput" value={OTP} onChange={(e)=>{
        setOTP(e.target.value)

      }} />
      <div id="otpHelp" className="form-text"> </div>
      </div>
      <button onClick={verifyOTP1}>Verify</button>
      </>
      :
      null
      }
      {
        expandForm===false?
        <button type="submit" className="btn btn-primary">Request OTP</button>
        :
        null
      }
      <div id="recaptcha-container"></div>
    </form>
  </div>
);
    }

export default App;
