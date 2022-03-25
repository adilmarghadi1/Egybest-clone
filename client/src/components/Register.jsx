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
                    <h1><FaUserAlt className="user2"/> Create a new Account</h1>
                    <input type="text" placeholder='Name' required className="first11"/>
                    <input type="email" placeholder="Email" required className="first11"/>
                    <input type="password" placeholder="New Password" className="first11"/>
                    <div className="fl1">
                        <label for='male'><BiMale className="us"/> Male 
                        <span className="space"><input type='radio' name="check" id='male' className="male1"/></span></label>
                    <label><FaFemale className="us"/> Female
                    <span className="space"><input type='radio'name="check"/></span></label>

                    </div>
                    <button className="sub">Sign Up</button>
                    <p className="para">Already have an account? <Link to='/login'>Sign In</Link></p>
                </form>
            </div>
 
        </div>
    )
}

export default Login