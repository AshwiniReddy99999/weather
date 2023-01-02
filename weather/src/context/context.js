import { weatherReducer } from "./reducer";
import React, {useReducer,useContext} from 'react';

const WeatherContext=React.createContext();

const WeatherProvider=({children})=>{
    const [state,dispatch]=useReducer(weatherReducer,{
        city:{
            "city": "Delhi", 
            "lat": "28.6600", 
            "lng": "77.2300", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Delhi", 
            "capital": "admin", 
            "population": "29617000", 
            "population_proper": "16753235"
          },
          current:'',
          daily:''
    })
    return(
        <WeatherContext.Provider value={{state,dispatch}}>
           {children}
        </WeatherContext.Provider>
    )
}
export default WeatherProvider;



export const UseWeatherAppContext = ()=>{
    return useContext(WeatherContext);
}