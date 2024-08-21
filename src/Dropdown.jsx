import { Col } from 'react-bootstrap';

const Dropdown = ( {countryCode, setCode, countryCodes} ) => {

  const handleChange = (event) => {
    setCode(event.target.value);
    console.log("Code changed to " + event.target.value);
  };
  
  return (
    <Col>
      <label htmlFor="dropdown" className='w-50'>Elige el prefijo:</label>
      <select id="dropdown" className='w-50' value={countryCode} onChange={handleChange}>
        {countryCodes.map(
          (country)=> <option key={country.name} value={country.key}> {country.name} (+{country.key})</option>
        )}
      </select>
    </Col>
  );
};

export default Dropdown;