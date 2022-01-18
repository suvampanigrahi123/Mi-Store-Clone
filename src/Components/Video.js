import React from 'react'
import '../StyleSheet/Videos.css'
const Video = ({image,Name,index}) => {
    return (
        <div className='Video'>            
            <p>{Name}</p>
            <img src={image} alt={`${index} d`} />

        </div>
    )
}

export default Video;