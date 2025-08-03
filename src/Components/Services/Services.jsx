import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Cv from './Cv.pdf'

export default function Services() {
    return (
        <div className="services">
            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolore modi non sint consequatur, accusamus omnis!</span>
                <a href={Cv} download>
                <button className="button s-button">Download Cv</button>
                </a>
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <div style={{ left: '18rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </div>
                {/* second card  */}
                <div style={{ top: "12rem", left: "-2rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, Css, JavaScript, React"}
                    />
                </div>
                {/* Third Card */}
                <div style={{ top: "19rem", left: "15rem" }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"Lorem ispum dumy text are usually use in section where we need some random text."}
                    />
                </div>
                <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}
