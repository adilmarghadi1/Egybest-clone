import React from "react"
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import { FaFemale } from "react-icons/fa";
import { Link} from 'react-router-dom'

import './Register.css'
function Login() {
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
                <form>
                    <h1><FaUserAlt className="user2"/>  Sign in to your Account</h1>
                    
                    <input type="email" placeholder="Email Or Username" required className="first11"/>
                    <input type="password" placeholder="New Password" className="first11"/>
                     
                    <button className="sub">Sign In</button>
                    <p className="para">Create a new Account ?<Link to='/register'>Sign Up</Link></p>
                </form>
            </div>
            </div>
 
        </div>
    )
}

export default Login