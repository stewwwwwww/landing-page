import React from 'react'
import burgerLogo from "../assets/burgerLogo.png"
import "../styles/Logo.css"
function Logo() {
  return (
    <div className="logos">
      <img className="logo1" src={burgerLogo} alt="logo" />
      <img className="logo2" src={burgerLogo} alt="logo" />
      <img className="logo3" src={burgerLogo} alt="logo" />
      <img className="logo4" src={burgerLogo} alt="logo" />
    </div>
  )
}

export default Logo
