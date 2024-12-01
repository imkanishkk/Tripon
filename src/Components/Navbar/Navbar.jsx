import React, {useState} from 'react'
import './navbar.css'
import {ImAirplane} from 'react-icons/im'
import {RiCloseCircleFill} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'


const Navbar = ({setShowlogin}) => {
    const [active ,setActive] = useState('navBar')
    // function to toggle navbar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }
    // function to close navbar
    const removeNavbra = () =>{
        setActive('navBar')
    }

    return(
    <section className='navBarSection'>
        <header className="header flex">

            <div className="logoDiv">
                <a href='#' className="logo flex">
                    <h1><ImAirplane className= "icon"/>TripOn</h1>
                </a>
            </div>

            <div className={active}>
                <ul className="navList flex">
                    
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Shop</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Pages</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">News</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>

                    <button className='btn' onClick={()=>setShowlogin(true)}>
                        <a href='#'>LOGIN</a>
                    </button> 
                    
                </ul>

                <div onClick={removeNavbra} className="closeNavbar">
                    <RiCloseCircleFill className="icon"/>
                </div>
            </div>
            
            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon"/>
            </div>
        
        </header>   
    </section>
    )
}

export default Navbar