import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [search, setSearch] = useState('');
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        // console.log('effect')
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                // console.log('promise fulfilled')
                setCountries(response.data)
            })
    }, [])
    console.log('render', countries.length, 'Country')

    const handleSearchfilter = (event) => {
        const search = (event.target.value)
        console.log(search)
        setSearch(search)

    }

    return (
        <div >
            <div>
                find Countries<input
                    value={search}
                    onChange={handleSearchfilter}
                >
                </input>
                {
                    countries.map((country, i) => <li key={i}>{country.name.common}</li>)
                }

            </div>
        </div>
    )
}
export default App

