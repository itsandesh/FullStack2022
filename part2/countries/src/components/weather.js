import { useState, useEffect } from 'react'
import axios from 'axios'

const Weatherinfo = ({ location }) => {

    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`)
            .then(response => {
                // console.log(response.data)
                setWeather(response.data);
            })
    }, [location, api_key])
    const icon = weather?.weather?.[0].icon
    return (

        <div>
            <p>temperature {weather?.main?.temp}° Celcius </p>
            <img
                alt='weather icon'
                src={'http://openweathermap.org/img/wn/' + icon + '@2x.png'}
            />
            <p>wind {weather?.wind?.speed} m/s</p>
        </div>
    )
}
export default Weatherinfo