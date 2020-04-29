import React from 'react'
import avatar from '../assets/images/profile.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>From the kitchen, to the command line  <br />
        <br /> A portfolio of works completed at GA <br /> created by Dylan Lewis <br /> </strong>
        <br /> <br />
      </h1>
    </div>
    
  </header>
)

export default Header
