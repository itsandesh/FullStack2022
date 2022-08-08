import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);
    const [countriesList, setCountriesList] = useState([]);





    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleSearchfilter = (event) => {
        const search = (event.target.value)
        console.log(search)
        setSearch(search)
        setCountriesList(
            countries.filter((country) =>
                country.name.common.toLowerCase().includes(search)))
    }
    // console.log(countriesList);
    const Countryinfo = ({ country }) => {
        console.log("country array", country)
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>{country.capital}<br></br>
                    area {country.area}</p>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <img src={country.flags.png} width='150' alt={''} />
                <h4>Weather in {country.capital}</h4>
                <Weatherinfo location={country.capital} country={country} />
            </div>
        )
    }
    const Weatherinfo = ({ location }) => {

        const [weather, setWeather] = useState([])
        const api_key = process.env.REACT_APP_API_KEY

        console.log(location);
        console.log(api_key);


        useEffect(() => {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`)
                .then(response => {
                    setWeather(response.data);
                    // console.log(weather)
                    console.log('sasa');

                    // setCountries(response.data)
                    console.log(response.data);

                })
        }, [])
        // console.log("country array", country)
        return (

            console.log(weather?.weather?.[0]?.main)


        )
    }
    return (
        <div >
            <div>
                find Countries<input
                    placeholder="Search here"
                    value={search}
                    onChange={handleSearchfilter}
                >
                </input>
                {countriesList.length > 10
                    ? (<div>
                        Too many matches, specify another filter
                    </div>)
                    : (
                        countriesList.length === 1
                            ? (<div></div>)
                            : (
                                countriesList.map(country => (
                                    <div key={country.name.official}>
                                        {country.name.common}
                                        <button onClick={() => { setCountriesList([country]) }}>show</button></div>))
                            )
                    )
                }
                {countriesList.length === 1
                    ? <Countryinfo country={countriesList[0]} />
                    : []
                }
            </div>
        </div>
    )
}
export default App

