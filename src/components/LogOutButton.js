import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];


export const LogOutButton = ({
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

    const { logout, isAuthenticated } = useAuth0();

    return(
        isAuthenticated && (
            <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
             onClick={() => logout()}
            type={type}>
                {children}
                Log Out
            </button>

        )
        
    )
}
