import React, { useState } from 'react';
import {Col, Row} from 'react-bootstrap';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './Dropdown';
import Textbox from './Textbox';
import { Tab } from 'bootstrap';


function App() {

  const countryCodes = [
    { "key": 93, "name": "Afganistán" },
    { "key": 355, "name": "Albania" },
    { "key": 49, "name": "Alemania" },
    { "key": 244, "name": "Angola" },
    { "key": 1, "name": "Antigua y Barbuda" },
    { "key": 966, "name": "Arabia Saudita" },
    { "key": 213, "name": "Argelia" },
    { "key": 54, "name": "Argentina" },
    { "key": 374, "name": "Armenia" },
    { "key": 61, "name": "Australia" },
    { "key": 43, "name": "Austria" },
    { "key": 994, "name": "Azerbaiyán" },
    { "key": 238, "name": "Cabo Verde" },
    { "key": 855, "name": "Camboya" },
    { "key": 237, "name": "Camerún" },
    { "key": 1, "name": "Canadá" },
    { "key": 235, "name": "Chad" },
    { "key": 56, "name": "Chile" },
    { "key": 86, "name": "China" },
    { "key": 57, "name": "Colombia" },
    { "key": 269, "name": "Comoras" },
    { "key": 225, "name": "Costa de Marfil" },
    { "key": 506, "name": "Costa Rica" },
    { "key": 385, "name": "Croacia" },
    { "key": 593, "name": "Ecuador" },
    { "key": 20, "name": "Egipto" },
    { "key": 503, "name": "El Salvador" },
    { "key": 971, "name": "Emiratos Árabes Unidos" },
    { "key": 421, "name": "Eslovaquia" },
    { "key": 386, "name": "Eslovenia" },
    { "key": 34, "name": "España" },
    { "key": 1, "name": "Estados Unidos" },
    { "key": 372, "name": "Estonia" },
    { "key": 251, "name": "Etiopía" },
    { "key": 241, "name": "Gabón" },
    { "key": 220, "name": "Gambia" },
    { "key": 995, "name": "Georgia" },
    { "key": 233, "name": "Ghana" },
    { "key": 30, "name": "Grecia" },
    { "key": 299, "name": "Groenlandia" },
    { "key": 502, "name": "Guatemala" },
    { "key": 224, "name": "Guinea" },
    { "key": 245, "name": "Guinea-Bissau" },
    { "key": 509, "name": "Haití" },
    { "key": 504, "name": "Honduras" },
    { "key": 91, "name": "India" },
    { "key": 62, "name": "Indonesia" },
    { "key": 98, "name": "Irán" },
    { "key": 964, "name": "Irak" },
    { "key": 353, "name": "Irlanda" },
    { "key": 354, "name": "Islandia" },
    { "key": 972, "name": "Israel" },
    { "key": 39, "name": "Italia" },
    { "key": 1, "name": "Jamaica" },
    { "key": 81, "name": "Japón" },
    { "key": 962, "name": "Jordania" },
    { "key": 7, "name": "Kazajistán" },
    { "key": 254, "name": "Kenia" },
    { "key": 996, "name": "Kirguistán" },
    { "key": 686, "name": "Kiribati" },
    { "key": 381, "name": "Kosovo" },
    { "key": 965, "name": "Kuwait" },
    { "key": 371, "name": "Letonia" },
    { "key": 231, "name": "Liberia" },
    { "key": 218, "name": "Libia" },
    { "key": 370, "name": "Lituania" },
    { "key": 389, "name": "Macedonia" },
    { "key": 261, "name": "Madagascar" },
    { "key": 60, "name": "Malasia" },
    { "key": 265, "name": "Malawi" },
    { "key": 960, "name": "Maldivas" },
    { "key": 223, "name": "Mali" },
    { "key": 356, "name": "Malta" },
    { "key": 212, "name": "Marruecos" },
    { "key": 230, "name": "Mauricio" },
    { "key": 52, "name": "México" },
    { "key": 691, "name": "Micronesia" },
    { "key": 373, "name": "Moldavia" },
    { "key": 968, "name": "Omán" },
    { "key": 92, "name": "Pakistán" },
    { "key": 680, "name": "Palau" },
    { "key": 507, "name": "Panamá" },
    { "key": 675, "name": "Papúa Nueva Guinea" },
    { "key": 595, "name": "Paraguay" },
    { "key": 51, "name": "Perú" },
    { "key": 48, "name": "Polonia" },
    { "key": 351, "name": "Portugal" },
    { "key": 1, "name": "Puerto Rico" },
    { "key": 44, "name": "Reino Unido" },
    { "key": 236, "name": "República Centroafricana" },
    { "key": 243, "name": "República Democrática del Congo" },
    { "key": 1, "name": "República Dominicana" },
    { "key": 40, "name": "Rumania" },
    { "key": 7, "name": "Rusia" },
    { "key": 250, "name": "Rwanda" },
    { "key": 685, "name": "Samoa" },
    { "key": 590, "name": "San Bartolomé" },
    { "key": 1, "name": "San Cristóbal y Nieves" },
    { "key": 378, "name": "San Marino" },
    { "key": 508, "name": "San Pedro y Miquelón" },
    { "key": 1, "name": "Santa Lucía" },
    { "key": 239, "name": "Santo Tomé y Príncipe" },
    { "key": 221, "name": "Senegal" },
    { "key": 381, "name": "Serbia" },
    { "key": 248, "name": "Seychelles" },
    { "key": 232, "name": "Sierra Leona" },
    { "key": 65, "name": "Singapur" },
    { "key": 1, "name": "Sint Maarten" },
    { "key": 963, "name": "Siria" },
    { "key": 252, "name": "Somalia" },
    { "key": 27, "name": "Sudáfrica" },
    { "key": 249, "name": "Sudán" },
    { "key": 46, "name": "Suecia" },
    { "key": 41, "name": "Suiza" },
    { "key": 66, "name": "Tailandia" },
    { "key": 255, "name": "Tanzania" },
    { "key": 992, "name": "Tayikistán" },
    { "key": 670, "name": "Timor Oriental" },
    { "key": 228, "name": "Togo" },
    { "key": 676, "name": "Tonga" },
    { "key": 1, "name": "Trinidad y Tobago" },
    { "key": 216, "name": "Túnez" },
    { "key": 90, "name": "Turquía" },
    { "key": 993, "name": "Turkmenistán" },
    { "key": 380, "name": "Ucrania" },
    { "key": 256, "name": "Uganda" },
    { "key": 998, "name": "Uzbekistán" },
    { "key": 678, "name": "Vanuatu" },
    { "key": 58, "name": "Venezuela" },
    { "key": 84, "name": "Vietnam" }
  ];

  const [pNumber, setNumber] = useState(30);
  const [countryCode, setCode] = useState(57);

  const valueUpdater = (x) => {
    setNumber(x);
  };

  return (
    <>
      <div className="app-body">

        <div className='container'>

          <h1 className='title'>Atajo para Whatsapp</h1>
          <br></br>
          <h4>Mensajea directamente a numeros no guardados</h4>
          <br></br>

          <div className='typing-area d-flex flex-column flex-lg-row'>
            <Col className='d-flex flex-column flex-lg-row'>
              <Dropdown countryCode={countryCode} setCode={setCode} countryCodes={countryCodes} className='prefix-dropdown d-flex'></Dropdown>
              <Textbox value={pNumber} updater={valueUpdater} className='number-field'></Textbox>
            </Col>            
          </div>

          <Row className='full-number'>
            <p>Mensajeando a: +{countryCode} {pNumber}</p>
          </Row>
          
          <button className='btn btn-primary fs-4'>
            <a href={`https://api.whatsapp.com/send?phone=${countryCode}${pNumber}`} className='custom-link'>Enviar mensaje</a>
          </button>
        </div>

      </div>
    </>
  );
}

export default App;
