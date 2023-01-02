import { useEffect } from "react";
import axios from 'axios';
import './ChooseState.css'
import {UseWeatherAppContext} from '../../context/context'


import cities from '../../data.json'

const ChooseState=(e)=>{
  
    const {state:{city},dispatch}=UseWeatherAppContext();
    console.log('rohit',UseWeatherAppContext())
    console.log(city)
    const handleSelectState=(e)=>{
        
      const selectedCity=cities.filter((city)=>
        city.city===e.target.value.split("-")[0]
      )
    
      dispatch({
        type:'SET_CITY',
        payload:{...selectedCity}
      })
    }
    
    const APIKEY = '49cb80bc3552a5a1f8a457ef5aea1245';
    let lat = city[0].lat && city[0].lat ? city[0].lat : '';
     console.log(lat)
    let lon= city[0].lng && city[0].lng ? city[0].lng : '';
    // let exclude = 'hourly,minutely';
    const ULR =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKEY}`
    const fetchData = async()=>{
       await axios(ULR).then((data)=>{
            let current=data.data
           console.log(data)
            dispatch({
                type:'SET_CURRENT',
                payload:{...current}
            })
            
           
        })
    }
    useEffect(()=>{
       fetchData();
       // eslint-disable-next-line
    }, [city])
    

    return(
        <>
        <div className="chooseState" >
            <select className="select" onChange={handleSelectState}>
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