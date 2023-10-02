import React, { useEffect, useState } from 'react'
import './nav.css'

export default function Navbar() {


    const [toogle, settoogle] = useState(false)
    const toggleNav=()=>{
        settoogle(!toogle);
    }
    const [screen, setScreen] = useState(window.innerWidth)
    useEffect(() => {
        const changeWidth = () => {
            setScreen(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])


    return (
        <>
        <div className='container'>
            <div className="brand">KUBER E-BIKES</div>
            {(toogle || screen>765 )&&(<ul className='nav'>
            <li><a href="/">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#model">MODEL</a></li>
                <li><a href="#dealer">BECOME A DEALER</a></li>
            </ul>)}
        </div>
            <div className="toggle" onClick={toggleNav}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </>
    )
}
