import React, { useState } from 'react'
import '../../NavItems/Css/Registrationform.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import {Link,useNavigate} from "react-router-dom"
import { initializeApp } from 'firebase/app'
import firebase from 'firebase/app'


function Registrationform() {
  const navigate = useNavigate();   
    const[values,setValues] = useState({
      name:"",
      email:"",
      password:"",
      confirmpassword:""
    });
    ///Variables
    const name=values.name;
    const email=values.email;
    const password=values.password;
    const confirmpassword=values.confirmpassword;
    const [errorMsg,setErrorMsg] = useState("");
    const [submitButtonDisabled,setSubmitbuttonDisabled] = useState(false);
    const Register=()=>{
      firebase.auth()  
      .createUserWithEmailAndPassword(email,password)
      .then(() => {
          console.log(firebase.auth().currentUser.uid);
          //FirebaseApp
          firebase.firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
              uid: firebase.auth().currentUser.uid, // use uid instead of currentUser
              name: name,
              email: email,
              //wishList: userValue
          });
          }).then(()=>{
            console.log("hogya") 
            // navigate('Home');
          })
      .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          console.log(error);
      }

  if (error.code === 'auth/invalid-email') {
console.log('That email address is invalid!');
}

console.error(error);
});

}

    const handleSubmission = () => {
      if(!values.name || !values.email || !values.password || !values.confirmpassword ){
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("")
      setSubmitbuttonDisabled(true);
          setSubmitbuttonDisabled(false);
          
          navigate("/Home");
        }

    return (

<div>
  <div>
    <Header/>
  </div>





  <div className="registration-form">
      <form>
        <h2>Register</h2>
        <div className="registration__form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" onChange={event=>
            setValues((prev)=> ({ ...prev, name: event.target.value}))
          }
            />
        </div>
        <div className="registration__form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" onChange={event=>
            setValues((prev)=> ({ ...prev, email: event.target.value}))
          }
          />
        </div>
        <div className="registration__form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" onChange={event=>
            setValues((prev)=> ({ ...prev, password: event.target.value}))
          }
          />
        </div>
        <div className="registration__form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword"onChange={event=>
            setValues((prev)=> ({ ...prev, confirmpassword: event.target.value}))
          }
          />
        </div>
        <div className="registration__form-group">
          <button type='button' onClick={Register} disabled={submitButtonDisabled}>Register</button>
        </div>
        <div className='register__log'>
          <b className='error'>{errorMsg}</b>
          <p>Go to Login page?  <a href='/Loginform' className='register__login'>Login Page</a></p>
        </div>
      </form>
    </div>

  
  
  
  <div>
    <Footer/>
  </div>
</div>


  )
  }
export default Registrationform