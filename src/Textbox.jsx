import {Col, Row} from "react-bootstrap";

const Textbox = ( {value, updater}) => {

    const updateHandler = (e) => {
        updater(e.target.value);
    } 

    return (
        <Col>
            <label htmlFor="inputNumber" className='w-50'>Escribe el numero</label>
            <input type='number' id='inputNumber' placeholder='123456789' className='w-50' onChange={updateHandler} value={value} pattern="\d{10}"
            title="Debe ingresar exactamente 10 dígitos." required></input>
        </Col>
    );
}

export default Textbox;