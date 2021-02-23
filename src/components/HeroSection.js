import React from 'react';
import '../App.css';
import { Button } from './Button';
import { LogOutButton } from './LogOutButton';
import './HeroSection.css';
import Login from './pages/Login';

function HeroSection(){

    return(
        <div className='hero-container'>
            <video src="videos/coins.mp4" autoPlay loop muted/>
            
            <p>Merit Banking is happy to help you achieve your goals</p>

            <Login />
            


        </div>
        
    )
}

export default HeroSection;
