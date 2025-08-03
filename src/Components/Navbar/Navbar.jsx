import React from 'react'
import './Navbar.css'
import Toogle from '../Toogle/Toogle'
import { Link } from 'react-scroll'
import { tr } from 'framer-motion/client'

export default function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Usman</div>
            <Toogle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} >
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true} >
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfoloio' smooth={true} >
                    <li>ُPortfolio</li>
                    </Link>
                    <Link spy={true} to='Testimomial' smooth={true}>
                    <li>Testimomial</li>
                    </Link>

                </ul>
            </div>
            <button className="button n-button">
                Contact 
            </button>
        </div>
    </div>
  )
}
