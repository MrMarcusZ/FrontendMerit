import React from 'react';

import CardItem from './CardItem';
import './Cards.css';



function Cards({bankinfo}) {
    if(bankinfo == null){
        var checking = `checking balance:${bankinfo.checkingBalance}`;
    }else{
        var checking = 'checking balance:N/A';
    }


    return(
        <div className='cards'>
            <h1>Accounts</h1>
            <div className='cards_container'>
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                        src="pictures/"
                        text={checking}
                        /*text={PostData.map((postDetail, index) =>{
                            return<h1>{postDetail.balance}</h1>
                        })}*/
                        label='Checking'
                        path='/'
                         />
                         <CardItem
                        src="pictures/"
                        text="JSON data here"
                        label='Savings'
                        path='/'
                         />
                         <CardItem
                        src="pictures/"
                        text="JSON data here"
                        label='CD'
                        path='/'
                         />
                         <CardItem
                        src="pictures/"
                        text="JSON data here"
                        label='IRA Rollover'
                        path='/'
                         />
                         <CardItem
                        src="pictures/"
                        text="JSON data here"
                        label='IRA Roth'
                        path='/'
                         />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;