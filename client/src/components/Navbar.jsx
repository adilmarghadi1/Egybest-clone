import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import egybestlogo from '../images/egybest_logo.png'
import { FaUserAlt } from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";
import Home from './Home'
import './Navbar.css'
function Navbar(props) {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div>
            <Router>
                <header className='header1'>

                <nav className='navbar'>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                         
                         <div className='left'>
                         <BsSearch className='search2'/>
                             <li className='nav-item'>
                                 <Link to='/' className='nav-link first' onClick={handleClick}>تسجيل الدخول</Link>
                             </li>
 
                             <li className='nav-item'>
                                 <Link to='/' className='nav-link second' onClick={handleClick}> اشترك مجاناً <FaUserAlt className='user1'/></Link>
                             </li>
                         </div>
                </ul>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                         
                        

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
                    <img src={egybestlogo} alt="logo" className='logo' />

                    <div className='nav-icon' activeClassName='active' onClick={handleClick}>
                     <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                 </div>
                </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Home />} />
                    
                </Routes>
            </Router>
        </div>
    )
}


export default Navbar;