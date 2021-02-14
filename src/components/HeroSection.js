import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){

    return(
        <div className='hero-container'>
            <video src="videos/coins.mp4" autoPlay loop muted/>
            <h1>Welcome</h1>
            <p>Merit Banking is happy to help you achieve your goals</p>
            <div className='hero-btns'>
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'> SignUp/Login
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
