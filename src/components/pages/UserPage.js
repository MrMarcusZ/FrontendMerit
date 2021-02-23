import React from 'react';
import '../../App.css';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import AccountHolder from '../AccountHolder';
import react from 'react';
import { baseUrl } from '../baseUrl';

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

class UserPage extends react.Component {

    render(){


        return(
             <>
             <AccountHolder ahi={this.state.ACI} />
             </>
         );
     }

}




export default UserPage;