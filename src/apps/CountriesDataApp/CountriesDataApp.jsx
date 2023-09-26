import { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';
import WeatherInfo from './components/WeatherInfo';

const CountriesDataApp = () => {
  const [countrySearch, setCountrySearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // i used a bit of debounce to avoid a lot of requests to the backend
    // and to avoid some changes in the ui because a request came before another
    const debounceFunction = setTimeout(() => {
      if (countrySearch !== '') {
        axios
          .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
          .then((response) => {
            const allCountries = response.data;
            const filteredCountries = allCountries.filter((countryObj) => {
              return countryObj.name.common
                .toLowerCase()
                .includes(countrySearch.toLowerCase());
            });
            console.log(filteredCountries);
            setCountries(filteredCountries);
          });
      }
    }, 1000);

    return () => {
      clearTimeout(debounceFunction);
    };
  }, [countrySearch]);

  const handleChange = (event) => {
    setCountrySearch(event.target.value);
  };

  return (
    <div>
      <h1>Countries Data</h1>
      <form>
        find countries{' '}
        <input type="search" value={countrySearch} onChange={handleChange} />
      </form>
      <div>
        {countries.length > 10 ? (
          'Too many matches, specify another filter'
        ) : countries.length === 1 ? (
          <>
            <CountryDetails countryObj={countries[0]} show={true} />
            <WeatherInfo countryCapital={countries[0].capital[0]} />
          </>
        ) : (
          countries.map((country) => {
            return <CountryDetails key={country.area} countryObj={country} />;
          })
        )}
      </div>
    </div>
  );
};

export default CountriesDataApp;
