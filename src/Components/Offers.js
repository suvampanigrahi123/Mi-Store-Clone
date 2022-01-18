import React from 'react'
import Offer from './Offer'
import '../StyleSheet/offers.css'
const Offers = ({offer}) => {
    return (
        <div className='OfferSection'>
        {offer.map((item,index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.image} />   
        ))}
        </div>
    )
}

export default Offers;
