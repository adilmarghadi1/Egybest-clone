import React, {useState} from 'react'
import egybestlogo from '../images/egybest_logo.png'
import { FaUserAlt } from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './Home'

import Login from './Login'
import Register from './Register'
import './Navbar.css'
 

function Navbar() {
    
    let navigate = useNavigate();
   function Logout(){
    localStorage.removeItem("token")
      navigate('/login')

  }
       
    return (
        <div>
                <header className='header1'>

                <nav className='navbar'>
                <ul className="nav-menu">
                <a onClick={Logout}>Logout</a>  
                   
                         
                         <div className='left'>
                         <BsSearch className='search2 '/>
                         <input type="text" className="search-click" name="" placeholder="search here..." />
                             <li className='nav-item'>
                                 <Link to='/login' className='nav-link first' >تسجيل الدخول</Link>
                             </li>
 
                             <li className='nav-item'>
                                 <Link to='/register' className='nav-link second' > اشترك مجاناً <FaUserAlt className='user1'/></Link>
                             </li>
                            
                         </div>
                </ul>
                <ul className="nav-menu">
                         
                        

                        <div className='right'>
                            <li className='nav-item'>
                            <div dir="rtl" lang="ar">
                                <div className='in'>
                                    <input type="text" className="inp" placeholder="ابحث عن فيلم او مسلسل او ممثل..."  /><BsSearch className='sea'/> 
                                </div>
                               
                            </div>
                            </li>
 
                        </div>
                    </ul>
                    <Link to="/"> 
                    <img src={egybestlogo} alt="logo" className='logo' />
                    </Link>
                     
                </nav>
                </header>
            
                
        </div>
    )
}


export default Navbar;