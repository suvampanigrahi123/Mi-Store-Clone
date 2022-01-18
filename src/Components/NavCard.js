import React from 'react'
import '../StyleSheet/NavCard.css'
const NavCard = ({name,price,image}) => {
    return (
        <div className='NavCard'>
            <img src={image} alt={price} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default NavCard
