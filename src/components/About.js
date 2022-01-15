import React from 'react'
import './about.css'

export default function About() {
    return (
        <div className='about'>
            <h3 className="abouthead">
                ABOUT US
            </h3>
            <div className="line-a"></div>
            <p >
            Kuber E-bikes is one of India’s leading electric two-wheeler manufacturer. Our goal is to build a better, cleaner and greener future for the generations to come.
            </p>
            <div className="que">
            Why Choose Us?
            </div>
            <ul className='ans'>
                <li className='choose'>Best Products</li>
                <li className='choose'>Quality Service</li>
                <li className='choose'>Trusted Dealers</li>
                <li className='choose'>Excellent Support</li>
            </ul>

        </div>
    )
}
