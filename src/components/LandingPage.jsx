import React from 'react'
import {Link} from 'react-router-dom'

function LandingPage() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            flexDirection: "column"
        }}>
            <div className='landing-header' style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                textAlign: "center"
            }}>
                <div>
                    <h2 style={{marginBottom: "0", color: "#D22B2B"}}>1UP</h2>
                    <h2 style={{marginTop: "0", color: "#fff"}}>00</h2>
                </div>
                <div>
                    <h2 style={{marginBottom: "0", color: "#D22B2B"}}>HIGH SCORE</h2>
                    <h2 style={{marginTop: "0", color: "#fff"}}>100000</h2>
                </div>
                <div>
                    <h2 style={{marginBottom: "0", color: "#D22B2B"}}>1UP</h2>
                    <h2 style={{marginTop: "0", color: "#fff"}}>00</h2>
                </div>
            </div>
            <p style={{fontSize: "24px", textAlign: "center"}}>PumpMan: Chompong Through Fear,more Candy at a
                Time!</p>
            <img className='logo' style={{width: "25%", height: "25%"}} src="/logo1.jpeg" alt=""/>
            <div className='buttons' style={{display: "flex", flexDirection: "column", width: "35%"}}>

                <ul class="custom-list">
                    <li><Link style={{color: "white", textDecoration: "none"}} to="/pacman">Play</Link></li>
                    <li><Link style={{color: "white", textDecoration: "none"}} to="/story1">Story</Link></li>

                </ul>
                <p style={{fontSize: "24px", textAlign: "center"}}>Join us on PumpFun at 8 PM UTC on 30th November for
                    the epic launch of PumpMan—an arcade adventure where thrills, chills, and power-ups await! 🎃💥</p>
            </div>
            <img className='moving-icon' style={{width: "100px", height: "100px"}} src="/icon.jpeg" alt=""/>
            <img className='moving-icon4' style={{width: "100px", height: "100px"}} src="/bird.jpg" alt=""/>
            <a href="https://x.com/PumpMan_ai" target="_blank" rel="noopener noreferrer">
                <img className='moving-icon2' style={{width: "100px", height: "100px"}} src="/icon2.jpeg" alt=""/>
            </a>
            <a href="https://t.me/pumpmanpump" target="_blank" rel="noopener noreferrer">
                <img className='moving-icon3' style={{width: "100px", height: "100px"}} src="/icon3.jpeg" alt=""/>
            </a>
        </div>
    )
}

export default LandingPage