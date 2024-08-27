import {Col, Row} from "react-bootstrap";

const button = document.querySelector('btn-primary');

const Textbox = ( {value, valueUpdater, setButtonStatus}) => {
    const updateHandler = (e) => {
        if ( isNaN(e.target.value) ){
            e.preventDefault();
            setButtonStatus(true); //disables button
        }
        else
        {
            if (e.target.value.length<10) {
                valueUpdater(e.target.value);
                setButtonStatus(true); //disables button
            }
            else {
                if (e.target.value.length>10) {
                //e.target.value = e.target.value.slice(0,10);
                e.target.value = e.target.value.slice(0,10);
                };
                valueUpdater(e.target.value);
                setButtonStatus(false); //enables button
            }            
        } 
    } 

    return (
        <Col>
            <label htmlFor="inputNumber" className='w-50'>Escribe el numero:</label>
            <input type='number' id='inputNumber' placeholder='301 123 4567' className='w-50' onChange={updateHandler} value={value}></input>
            {/* for text input instead: maxLength={10} pattern="\d{10}" title="Debe ingresar exactamente 10 dígitos." required */}
        </Col>
    );
}

export default Textbox;