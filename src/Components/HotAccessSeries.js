import React from 'react'
import HotItemCard from './HotItemCard'
import '../StyleSheet/HotAccessSeries.css'
const HotAccessSeries = ({music,musicCover,smartDevice,smartDeviceCover,Home,HomeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) => {
    return (
        <div className='HotAccessSeries'>
            <div>
                <img id='musicCover' src={musicCover || smartDeviceCover || HomeCover || lifeStyleCover ||mobileAccessoriesCover} alt='MusicCover'/>
            </div>
            {/* Second Div */}
            <div className='Musics'>
                {music && music.map((item,index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                {smartDevice && smartDevice.map((item,index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                {Home && Home.map((item,index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                {lifeStyle && lifeStyle.map((item,index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                {mobileAccessories && mobileAccessories.map((item,index)=>(
                    <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index} />
                ))}
                <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" index={1} />
            </div>
        </div>
    )
}

export default HotAccessSeries
