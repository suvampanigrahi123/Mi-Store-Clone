import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
const Banner = ({banner}) => {
    return (
        <Carousel fade>

{banner.map((item,index)=>(

            <Carousel.Item key={index} interval={1000} id='banner' keyboard={true}>
            <img className='d-block w-100' id='BannerImage' src={item.image} alt={`${index} banner`} />
            <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>read more</u>
            </Carousel.Caption>
            </Carousel.Item>
))}
        </Carousel>
    )
}

export default Banner