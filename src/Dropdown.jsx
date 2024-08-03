import React, { useState } from 'react';

const Dropdown = ( {prefix, setPrefix} ) => {

  const handleChange = (event) => {
    setPrefix(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Elige el prefijo:</label>
      <select id="dropdown" value={prefix} onChange={handleChange}>
        <option value="57">+57</option>
        <option value="58">+58</option>
        <option value="59">+59</option>
      </select>
    </div>
  );
};

export default Dropdown;