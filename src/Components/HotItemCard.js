import React from 'react'
import '../StyleSheet/HotItemCard.css'
const HotItemCard = ({name,price,image,index}) => {
    return (
        <div className='HotItemCard'>
            <img src={image} alt={`${index} Card`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default HotItemCard