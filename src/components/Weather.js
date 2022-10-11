import { useEffect , useState } from "react";
import axios from "axios";

const API_URL ='https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL ='https://openweathermap.org/img/wn/';
const API_KEY ='0cd734f3a478f43c64da7e193b663223';

export default function Weather({lat,lng}) {
    const [temp, setTemp] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [direction, setDirection] = useState(0)
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')


useEffect(() => {
    const address = API_URL +
    'lat=' + lat +
    '&lon=' + lng +
    '&units=metric' +
    '&appid=' + API_KEY;

    console.log(address);

    axios.get(address)
    .then((response)=> {
        console.log(response.data);
        setTemp(response.data.main.temp);
        setSpeed(response.data.wind.speed);
        setDirection(response.data.wind.deg);
        setDescription(response.data.weather[0].description);
        setIcon(ICON_URL + response.data.weather[0].icon + '@2x.png');
        console.log(ICON_URL + response.data.weather[0].icon + '@2x.png');
        }).catch (error=> {
            alert(error);
        })
}, [])  

return(
    <> 
        <h3>Weather on your location</h3>
        <p>{temp} C&#176;</p>
        <p>{speed} m/s {direction} degrees</p>
        <p>{description}</p>
        <img src={icon} alt=""/>
    </>
)
}