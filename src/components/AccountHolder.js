import react from 'react';
import { auth0, useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import Cards from './Cards';

const AccountHolder = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <view>
                <div>
                    <img src={"pictures/default-profile-icon-17.jpg"} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <JSONPretty data={user} />
                </div>
                <div>
                    <Cards />
                </div>
            </view>

        )
        
    )
}

export default AccountHolder