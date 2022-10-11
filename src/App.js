import {useEffect, useState} from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setIsloading(false)
      },(error) => {
        console.log(error)
        alert("Paikannus epäonnistui!")
      })
    } else {
      alert("Selaimesi ei tue paikannusta!")
    }
  }, [])
  
  if(isLoading){
    return <p>Lataa...</p>
  } else {
    return (
        <div>
          <h3>Your location:{latitude},{longitude}</h3>
          <p>
            Position:&nbsp;
            {latitude.toFixed(3)},
            {longitude.toFixed(3)}
          </p>
          <Weather lat={latitude} lng={longitude} />
        </div>
    );
  }
}

export default App;