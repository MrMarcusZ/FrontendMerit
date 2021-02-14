import React from 'react';
import '../../App.css';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import AccountHolder from '../AccountHolder';

function UserPage() {

    return(
        <>
        <AccountHolder />
        </>
    );
}

export default UserPage;