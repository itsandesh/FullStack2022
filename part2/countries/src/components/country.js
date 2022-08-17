import Weatherinfo from "./weather"

const Countryinfo = ({ country }) => {
    // console.log("country array", country)
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
export default Countryinfo