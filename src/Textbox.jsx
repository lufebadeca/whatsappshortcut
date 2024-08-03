import React from "react";

const Textbox = ( {value, updater}) => {

    const updateHandler = (e) => {
        updater(e.target.value);
    } 

    return (
        <>
            <label htmlFor="inputNumber">Escribe el numero</label>
            <input type='number' name='inputNumber' placeholder='123456789' onChange={updateHandler} value={value}></input>
        </>
    );
}

export default Textbox;