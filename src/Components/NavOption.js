import React,{useState,useEffect} from 'react'
import NavCard from './NavCard'
const NavOption = ({miphones,RedmiPhones,tv,laptops,lifeStyle,home,radio,accessSeries}) => {
    const[miphonesToggle,setmiphoneToggle]=useState(false);
    const[RedmiPhonesToggle,setRedmiPhonesToggle]=useState(false);
    const[tvToggle,settvToggle]=useState(false);
    const[laptopsToggle,setlaptopsToggle]=useState(false);
    const[lifeStyleToggle,setlifeStyleToggle]=useState(false);
    const[homeToggle,sethomeToggle]=useState(false);
    const[radioToggle,setradioToggle]=useState(false);
    const[accessSeriesToggle,setaccessSeriesToggle]=useState(false);
    useEffect(()=>{
        if(window.location.pathname==='/miphones'){
            return setmiphoneToggle(true);
        }
        if(window.location.pathname==='/redmiphones'){
            return setRedmiPhonesToggle(true);
        }
        if(window.location.pathname==='/tv'){
            return settvToggle(true);
        }
        if(window.location.pathname==='/laptops'){
            return setlaptopsToggle(true);
        }
        if(window.location.pathname==='/Fitness'){
            return setlifeStyleToggle(true);
        }
        if(window.location.pathname==='/Home'){
            return sethomeToggle(true);
        }
        if(window.location.pathname==='/radio'){
            return setradioToggle(true);
        }
        if(window.location.pathname==='/accessories'){
            return setaccessSeriesToggle(true);
        }
    },[miphonesToggle,RedmiPhonesToggle,homeToggle,accessSeriesToggle,lifeStyleToggle,tvToggle,laptopsToggle,radioToggle])
    return (
        <div className='navOptions'>
            {miphonesToggle? miphones.map((item,index)=>(
                <NavCard key={index} name={item.name} price={item.price} image={item.image}  />
            )):null}
            {RedmiPhonesToggle? RedmiPhones.map((item,index)=>(
                <NavCard key={index} name={item.name} price={item.price} image={item.image}  />
            )):null}
            {tvToggle? tv.map((item,index)=>(
                <NavCard key={index} name={item.name} price={item.price} image={item.image}  />
            )):null}
            {laptopsToggle? laptops.map((item,index)=>(
                <NavCard key={index} name={item.name} price={item.price} image={item.image}  />
            )):null}
            {lifeStyleToggle? lifeStyle.map((item,index)=>(
                <NavCard key={index} name={item.name} price={item.price} image={item.image}  />
            )):null}
            {homeToggle? home.map((item,index)=>(
                <NavCard key={index} name={item.name} price={item.price} image={item.image}  />
            )):null}
            {radioToggle? radio.map((item,index)=>(
                <NavCard key={index} name={item.name} price={item.price} image={item.image}  />
            )):null}
            {accessSeriesToggle? accessSeries.map((item,index)=>(
                <NavCard key={index} name={item.name} price={item.price} image={item.image}  />
            )):null}
        </div>
    )
}

export default NavOption
