import React from 'react'
import Video from '../Components/Video.js'
import '../StyleSheet/Videos.css'
const Videos = ({video}) => {
    return (
        <div className='Videos'>
        {video.map((item,index)=>(
             <Video key={index} image={item.image} Name={item.name} index={index} />
        ))}
        </div>
    )
}

export default Videos
