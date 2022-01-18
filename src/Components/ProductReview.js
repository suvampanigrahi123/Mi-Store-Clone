import React from 'react'
import '../StyleSheet/ProductReview.css'
const ProductReview = ({review}) => {
    return (
        <div className='ProductReview'>
                {
                    review.map((item,index)=>(
                        <div key={index} className='Product'>
                            <img src={item.image} alt={`${index}`} />
                            <div>
                                <p>{ item.review}</p>
                                <span>{item.name}</span>
                                <span id='price' >{item.price}</span>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default ProductReview
