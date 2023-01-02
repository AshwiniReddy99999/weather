import dayjs from 'dayjs';
import './Left.css'
import { UseWeatherAppContext } from '../../context/context';


function Left(){
    const weekdays=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    const {state:{city,current}}=UseWeatherAppContext();
  
    if(!current){
        return <div>loading....</div>
    }
    const weekdayIndex = dayjs.unix(current.dt).day();
    let city_name=city.city?city.city:city[0].city;
    let city_admin_name=city.admin_name?city.admin_name:city[0].admin_name;
    let country_name=city.country?city.country:city[0].country;
    return(
        <div className='leftcard'>
         <div>
           <h2> {weekdays[weekdayIndex]}</h2>
         </div>
         <div className='dateDay'>
         {dayjs.unix(current.dt).format("DD MMM YYYY")}
         </div>
         <div className='dateDay'>
            {city_name}-{city_admin_name}-{country_name}
         </div>
         <div>{<img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}alt="img"></img>}</div>
         <div>
            {current.weather[0].main}
         </div>
         <div><h1>{Math.round(current.main.temp_max)}°C</h1></div>

        </div>
    )
}

export default Left;