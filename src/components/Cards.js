import React from 'react';
import PostData from '../data/posts.json';
import CardItem from './CardItem';
import './Cards.css';



const Cards = (props) => {

    const info = props.info;
    console.log(info);

    

    return(
        <div className='cards'>
            <h1>Accounts</h1>
            <div className='cards_container'>
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem
                        src="pictures/"
                        text="JSON data here"
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