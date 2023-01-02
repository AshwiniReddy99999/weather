import { useEffect } from "react";
import axios from 'axios';
import './ChooseState.css'
import {UseWeatherAppContext} from '../../context/context'


import cities from '../../data.json'

const ChooseState=(e)=>{
  
    const {state:{city},dispatch}=UseWeatherAppContext();
    
   
    const handleSelectState=(e)=>{
        console.log(e)
      const selectedCity=cities.filter((city)=>
        city.city===e.target.value.split("-")[0]
      )
    
    
      dispatch({
        type:'SET_CITY',
        payload:{...selectedCity}
      })
    }
  
    const APIKEY = '49cb80bc3552a5a1f8a457ef5aea1245';

    let lat = city.lat ? city.lat:city[0].lat;
     console.log(lat)
    let lon=  city.lng ? city.lng:city[0].lng;
   
    const ULR =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`
    const fetchData = async()=>{
       await axios(ULR).then((data)=>{
            let current=data.data
          console.log(current)
            dispatch({
                type:'SET_CURRENT',
                payload:{...current}
            })
            
           
        })
    }
    useEffect(()=>{
      console.log(1)
       fetchData();
       // eslint-disable-next-line
    }, [city])
    

    return(
        <>
        <div className="chooseState" >
            <select className="select" defaultValue={city} onChange={handleSelectState}>
                {
                 cities && cities.length>0&&cities.map((cities)=>{
                    return(
                        <option>{cities.city}-{cities.admin_name}</option>
                    )
                  })
                }
            </select>
        </div>
        </>
    )

}

export default ChooseState;