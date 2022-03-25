import React from "react"
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import './Register.css'
function Login() {
    return (
        
        <div className="container2">
            <div className="box9">

            </div>

            <div className="box10">
                <a href="#"><AiFillFacebook /> Sign in with Facebook</a>
                <a href="#"><AiOutlineGooglePlus />Sign In With Google</a>
            </div>
        </div>
    )
}

export default Login