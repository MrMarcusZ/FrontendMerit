import react from 'react';
import { auth0, useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import Cards from './Cards';
import { baseUrl } from './baseUrl';

function RenderAccount({bankinfo}){
    const {user, isAuthenticated}  = useAuth0();
    if(bankinfo == null){
        return (
                        isAuthenticated && (
                            <view>
                                <div>
                                    <img src={"pictures/default-profile-icon-17.jpg"} alt={user.name} />
                                    <h2>{user.name}</h2>
                                    <p>{user.email}</p>
                                    <p>{baseUrl}</p>
                                    <JSONPretty data={user} />
                                </div>
                                <div>
                                    <Cards />
                                </div>
                            </view>

                        )
                    );
    }else{
        return (
                                isAuthenticated && (
                                    <view>
                                        <div>
                                            <img src={"pictures/default-profile-icon-17.jpg"} alt={user.name} />
                                            <h2>{user.name}</h2>
                                            <p>{user.email}</p>
                                            <p>{baseUrl}</p>
                                            <JSONPretty data={bankinfo} />
                                        </div>
                                        <div>
                                            /*<Cards bankinfo={bankinfo}/>*/
                                        </div>
                                    </view>

                                )
                            );

    }
    }
    export default RenderAccount;