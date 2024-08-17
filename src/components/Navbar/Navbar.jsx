import React, { useEffect, useState } from 'react'
import './Navbar.css'

import { Link } from 'react-scroll';
function Navbar() {
  const [sticky,setSticky]=useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500? setSticky(true):setSticky(false);
    });
  },[]);
  return (
    <div>
     <nav className={`container ${sticky? 'dark-nav': ''}`}>
        <h2>TravelHuB</h2>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`${menuOpen ? 'open' : ''}`}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='destination' smooth={true} offset={-260} duration={500}>Destination</Link></li>
            <li><Link to='deals' smooth={true} offset={-260} duration={500}>Deals</Link></li>
           
            <li><Link to='contact' smooth={true} offset={-260} duration={500}className='btn' onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
         </ul>
     </nav>
    </div>
  )
}

export default Navbar  