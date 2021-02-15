import react from 'react';
import { auth0, useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import Cards from './Cards';
import { baseUrl } from './baseUrl';

class AccountHolder extends react.Component {
    constructor(props){
        super(props);
        this.state={ACI: null};
    }
    const {user, isAuthenticated}  = useAuth0();
    //
    var jwtInfo="no token";
    var AccountHolderInfo='noInfo';
    
    
    function createAccountHolder(AccHolderInfo){
        AccountHolderInfo=AccHolderInfo;
        this.setState({ACI: AccHolderInfo})
        /*console.log(AccountHolderInfo);*/
    }

    function setToken(info){

        jwtInfo = info.jwt;
        console.log('info:');
        console.log(info);
        console.log('jwtInfo:');
        console.log(jwtInfo);
        console.log('phase 1 complete, starting phase 2');
        /*var bodyInfo2 = {
                 username: "andres",
                 password: "pass"
            };
        const requestOptions2 = {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' ,
                    'Authorization': `Bearer ${jwtInfo}`
                },
                body: JSON.stringify(bodyInfo2)
            };
        fetch(baseUrl+'authenticate/createUser', requestOptions2)
                .then(response => response.json())
                .then(response => console.log(response));

*/
                var bodyInfo3 = {
                    firstName: "Gebre",
                    lastName: "Manji",
                    ssn: "123456789",
                    contact : {
                        phone: "5552121212"
                    },
                    user : {
                        id: 100000
	                }
                };
                const requestOptions3 = {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: { 'Content-Type': 'application/json' ,
                                'Authorization': `Bearer ${jwtInfo}`
                    },
                    body: JSON.stringify(bodyInfo3)
                };
                    fetch(baseUrl+'AccountHolders/', requestOptions3)
                    .then(response => response.json())
                    .then(response => createAccountHolder(response));
                        }


                        var bodyInfo = { username: 'admin',password:'admin' };

                        const requestOptions = {
                                method: 'POST',
                                credentials: 'same-origin',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(bodyInfo)
                            };
                        fetch(baseUrl+'authenticate', requestOptions)
                                .then(response => response.json())
                                .then(response => setToken(response));

    render(){
            return (
                isAuthenticated && (
                    <view>
                        <div>
                            <img src={"pictures/default-profile-icon-17.jpg"} alt={user.name} />
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            //
                            <p>{baseUrl}</p>
                            //
                            <JSONPretty data={user} />
                        </div>
                        <div>
                            <Cards info={this.state.ACI}/>
                        </div>
                    </view>

                )
            );  
        }
    }

export default AccountHolder;