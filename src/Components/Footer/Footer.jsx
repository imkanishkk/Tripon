import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../Clips/video(2).mp4'
import {FiSend} from 'react-icons/fi'
import {ImAirplane} from 'react-icons/im'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return(
     <section className='footer'>
        <div className="videoDiv">
            <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="secContent container">
            <div className="contactDiv flex">
                <div data-aos='fade-up' className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>                   
                </div>
                <div className="inputDiv flex">
                    <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
                    <button data-aos='fade-up' className='btn flex' type='submit'>
                        SEND<FiSend className="icon"/>
                    </button>
                </div>
            </div>

            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href='#' className='logo flex'>
                           <ImAirplane className='icon'/> TripOn
                        </a>
                    </div>

                    
                </div>
            </div>
        </div>
     </section>
    )
}

export default Footer