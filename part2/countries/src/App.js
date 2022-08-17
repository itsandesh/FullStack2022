import { useState, useEffect } from 'react'
import axios from 'axios'
import Countryinfo from './components/country';

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

