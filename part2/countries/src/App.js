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
    console.log('render', countries.length, 'Country')

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

            </div>
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
                                        {country.name.common}</div>))
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

