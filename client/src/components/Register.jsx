import React, {useState, useEffect} from "react"
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import { FaFemale } from "react-icons/fa";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'

import axios from 'axios'
import './Register.css'
function Register(props) {
    let navigate = useNavigate();

    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      Type_Cheked : "",
    })
  
    const {name, email, password, Type_Cheked} = data
  
    const handleChange = (e) => {
      setData({...data, [e.target.name] : e.target.value})
     
    }
   
  
    
    const handleSubmit = async (e) => {
      if (data.name === "" || data.email === "" || data.password=== "")  {
        alert("Please Enter A Valid Input")
        }
  
  
      
      e.preventDefault()
  
      try {
        await axios.post("/register", {
          name, email, password, Type_Cheked
        },
  
        {headers : {'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'}}
        
        )
  
        navigate("/login")
      }
  
      catch(err) {
        console.log(err)
      }
    }
    return (
        <div className="container101">


        <div className="container2">
            <div className="box10">
                <a href="#"><AiFillFacebook className="top1"/> Sign in with Facebook</a>
                <a href="#"><AiOutlineGooglePlus className="top1"/>Sign In With Google</a>
                <p>Use your social accounts to sign in quickly.</p>
                <div className="box11">
                <span className="or">Or</span>
                <span className="line"></span>
            </div>
            </div>

            <div className="box12">
            <form onSubmit={handleSubmit}>
                    <h1><FaUserAlt className="user2"/> Create a new Account</h1>
                    <input type="text" value={name} name="name" onChange={handleChange}  placeholder='Name' required className="first11"/>
                    <input type="email" name='email' value={email} placeholder="Email" onChange={handleChange}  required className="first11"/>
                    <input type="password" name='password' value={password} placeholder="New Password" onChange={handleChange}  className="first11"/>
                    <div className="fl1">

                        
                        <label for='male'><BiMale className="us"/> Male 
                        <span className="space"><input type='radio' name="Type_Cheked"   id='male' value="Male" className="male1" onChange={handleChange} /></span></label>


                    <label><FaFemale className="us"/> Female
                    <span className="space"><input type='radio' value="Female" name="Type_Cheked" onChange={handleChange}/></span></label>

                    </div>
                    <button className="sub">Sign Up</button>
                    <p className="para">Already have an account? <Link to='/login'>Sign In</Link></p>
                </form>
            </div>
            </div>
 
        </div>
    )
}

export default Register