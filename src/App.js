import React, { useState } from 'react';
import './app.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import LoginPopup from './Components/LoginPopup/LoginPopup'; // Ensure this path is correct

const App = () => {
  const [showLogin, setShowlogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowlogin={setShowlogin} />}
      <Navbar setShowlogin={setShowlogin} />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
