import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {LuClipboardCheck} from 'react-icons/lu'

import img1 from '../../Clips/img (1).jpg'
import img2 from '../../Clips/img (2).jpg'
import img3 from '../../Clips/img (3).jpg'
import img4 from '../../Clips/img (4).jpg'
import img5 from '../../Clips/img (5).jpg'
import img6 from '../../Clips/img (6).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [ 
    {
     id:1,
     imgScr: img1,
     destTitle:'TAJ MAHAL',
     location: 'Agra',
     grade: 'CULTURAL RELAX',
     fees:  '₹3000',
     description: 'An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the worlds heritage.' 
    },

    {
     id:2,
     imgScr: img2,
     destTitle:'GOLDEN TEMPLE',
     location: 'Punjab',
     grade: 'CULTURAL RELAX',
     fees: '₹4000',
     description: 'Golden Temple, the chief gurdwara, or house of worship, of Sikhism and the Sikhs’ most important pilgrimage site. It is located in the city of Amritsar, Punjab state, northwestern India.The temple welcomes over 100,000 visitors a day, many of them devotees.'

    },

    {
     id:3,
     imgScr: img3,
     destTitle:'PANAJI',
     location: 'Goa',
     grade: 'CULTURAL RELAX',
     fees: '₹6500',
     description: 'Panaji is the capital of the Indian state of Goa and the headquarters of North Goa district. Previously, it was the territorial capital of the former Portuguese India. It lies on the banks of the Mandovi river estuary in the Tiswadi sub-district. With a population of 114,759 in the metropolitan area'   
    },

    {
     id:4,
     imgScr: img4,
     destTitle:'GANGA GHAT',
     location: 'Varanasi',
     grade: 'CULTURAL RELAX',
     fees: '₹3500',
     description:'At Varanasi, where the holy River Ganga reverses its flow, the 84 ghats (steps and landings) in a 6.8 km stretch are a cultural landscape defined by situated events: natural—flooding, silting, and changing flow of the Ganga—and cultural—including ritual activities and performances that sustain public life.'   
    },

    {
      id:5,
      imgScr: img5,
      destTitle:'HAWA MAHAL',
      location: 'Jaipur',
      grade: 'CULTURAL RELEX',
      fees: '₹4000',
      description:'The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or womens chambers. Hawa Mahal is known as the “ palace of winds “. Maharaja Sawai Pratap Singh built it palace in 1799.'  
    },

    {
     id:6,
     imgScr: img6,
     destTitle:'MINICOY ISLAND',
     location:'Lakshadweep Island',
     grade: 'CULTURAL RELEX',
     fees: '₹10000',
     description:'Minicoy,is an island in Lakshadweep,India. Along with Viringili, it is on Maliku atoll,the southernmost atoll of Lakshadweep archipelago. Administratively,it is a census town in the Indian union territory of Lakshadweep.The island is situated 425km west of Trivandrum, the capital city of Kerala.'   
    },

]

const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])
    
    return(
    <section className='main container section'>
        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most visited destinations
            </h3>
        </div>

        <div className="secContent grid">
            {

            }

            {
              Data.map(({id, imgScr, destTitle, location, grade, fees, description})=>{
                return(
                    <div key={id} data-aos='fade-up' className="singleDestination">
                        <div className="imageDiv">
                            <img src={imgScr} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                            <h4 className="destTitle">
                                {destTitle}
                            </h4>
                            <span className="continent flex">
                               <HiOutlineLocationMarker className='icon'/>
                               <span className="name">{location}</span>
                            </span>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>
                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className='btn flex'>
                                DETAILS <LuClipboardCheck className="icon"/>
                            </button>
                        </div>
                    </div>
                )
              })  
            }
        </div>

    </section>
    )
}

export default Main