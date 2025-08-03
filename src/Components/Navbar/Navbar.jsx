import React from 'react'
import './Navbar.css'
import Toogle from '../Toogle/Toogle'

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
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>ُPortfolio</li>
                    <li>Testimomial</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact 
            </button>
        </div>
    </div>
  )
}
