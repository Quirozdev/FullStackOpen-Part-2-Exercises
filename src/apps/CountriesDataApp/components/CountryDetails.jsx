import { useState } from 'react';

const CountryDetails = ({ countryObj, show }) => {
  const [isShown, setIsShown] = useState(show || false);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <p>{countryObj.name.common}</p>
        <button onClick={() => setIsShown(!isShown)}>
          {isShown ? 'not show' : 'show'}
        </button>
      </div>
      {isShown ? (
        <>
          <h2>{countryObj.name.common}</h2>
          <p>capital {countryObj.capital[0]}</p>
          <p>area {countryObj.area}</p>
          <p style={{ fontWeight: 'bold' }}>languages</p>
          <ul>
            {Object.values(countryObj.languages).map((language) => {
              return <li key={language}>{language}</li>;
            })}
          </ul>
          <img src={countryObj.flags.png} alt={countryObj.flags.alt} />
        </>
      ) : null}
    </div>
  );
};

export default CountryDetails;
