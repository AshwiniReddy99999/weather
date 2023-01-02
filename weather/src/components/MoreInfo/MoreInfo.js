import './MoreInfo.css'
import { UseWeatherAppContext } from '../../context/context';

function MoreInfo(){
    const {state:{city,current}}=UseWeatherAppContext();
    let city_population=city.population?city.population:city[0].population;
    if(!current){
        return <div>loading....</div>
    }
    return(
        <div className='weekInfo'>
         <div className='space'>
            <h2>Humidity</h2>
            <h2>{current.main.humidity}%</h2>
      
         </div>
         <div className='space'>
            <h2>Wind</h2>
            <h2>{Math.round(current.wind.speed)}km/h</h2>
      
         </div>
         <div className='space'>
            
            <h2>{`Population`}</h2>
             <h2>{city_population}</h2>
         </div>
          
        </div>
    )
}

export default MoreInfo;