import React from 'react'
import '../StyleSheet/StarProducts.css'
const StarProducts = ({Data}) => {
    return (
        <div className='StarProducts'>
            <div>
                <a href={Data[0].url}><img className='Images' src={Data[0].image} alt='Ist Product'/></a>
            </div>
            <div>
            <a href={Data[1].url}><img className='Images' src={Data[1].image} alt='2nd Product'/></a>
            <a href={Data[2].url}><img className='Images' src={Data[2].image} alt='3rd Product'/></a>
            <a href={Data[3].url}><img className='Images' src={Data[3].image} alt='4th Product'/></a>
            </div>
        </div>
    )
}

export default StarProducts
