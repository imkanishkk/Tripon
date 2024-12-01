import React, { useState, useEffect } from 'react';
import './home.css';
import video from '../../Clips/video.mp4';
import { GrLocation } from 'react-icons/gr';
import { HiFilter } from 'react-icons/hi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [maxPrice, setMaxPrice] = useState(10000); // State to track the max price slider value

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Function to handle slider change
  const handleSliderChange = (e) => {
    setMaxPrice(e.target.value); // Update state with the slider value
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holidays
          </h1>
        </div>

        {/* Search Card */}
        <div data-aos="fade-up" className="cardDiv grid">
          {/* Destination Input */}
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here...." />
              <GrLocation className="icon" />
            </div>
          </div>

          {/* Date Input */}
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          {/* Price Input with Slider */}
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">₹{maxPrice}</h3>
            </div>
            <div className="input flex">
              <input
                type="range"
                max="10000"
                min="2000"
                step="500"
                value={maxPrice}
                onChange={handleSliderChange} // Attach the slider change handler
              />
            </div>
          </div>

          {/* Filter Button */}
          <div className="searchOption flex">
            <HiFilter className="icon" />
            <span>MORE FILTER</span>
          </div>
        </div>

        {/* Footer Icons */}
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <BsTwitterX className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home