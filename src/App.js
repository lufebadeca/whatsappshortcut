import React, { useState } from 'react';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './Dropdown';
import Textbox from './Textbox';
import { Tab } from 'bootstrap';


function App() {
  const [pNumber, setNumber] = useState(0);
  const [prefix, setPrefix] = useState('57');

  const valueUpdater = (x) => {
    setNumber(x);
  };

  return (
    <>
      <div className="app-body">

        <div className='container m-10'>
          <h1 className='title'>Atajo para Whatsapp </h1>
          <br></br>
          <h4>Envia mensajes a numeros no guardados en tu lista de contactos</h4>
          <br></br>

          <div className='column'>
            <div className='typing-area'>
              <Dropdown value={prefix} setPrefix={setPrefix} className='col-3'></Dropdown>
              <Textbox value={pNumber} updater={valueUpdater} className='text-box'></Textbox>
            </div>
            <p>Numero completo: +{prefix} {pNumber}</p>
          </div>

          
          <button className='btn btn-primary'>
            <a href={`https://api.whatsapp.com/send?phone=${prefix}${pNumber}`} className='custom-link'>Send message</a>
          </button>
        </div>

      </div> 
    </>
  );
}

export default App;
