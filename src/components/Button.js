import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/Login';

/*
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0];

     const checkButtonSize = SIZES.includes(buttonSize) 
     ? buttonSize 
     : SIZES[0];

     return(
         <Link to='/sign-up' className='btn-mobile'>
             <button
             className={'btn ${checkButtonStyle} ${checkButtonSize}'}
             onClick={onClick}
             type={type}
             >
                 {children}
             </button>
         </Link>
     )
};
*/

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0];

     const checkButtonSize = SIZES.includes(buttonSize) 
     ? buttonSize 
     : SIZES[0];

    

    return(
        
            <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} 
            onClick={() => Login()} 
            type={type}>
                {children}
            </button>

        
        
    )
}

