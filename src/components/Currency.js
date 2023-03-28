import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch,currency} = useContext(AppContext)

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }

    return (
        <div>
            <select className='form-select' name='Currency' id='Currency' onChange={event => changeCurrency(event.target.value)} style={{backgroundColor:"lightgreen", color:"white"}}>
                <option value="" defaultValue hidden>Currency ({currency} Pound) </option>
                <option style={{color:"black"}} value='$'>$ Dollar</option>
                <option style={{color:"black"}} value='£'>£ Pound</option>
                <option style={{color:"black"}} value='€'>€ Euro</option>
                <option style={{color:"black"}} value='₹'>₹ Ruppee</option>
            </select>
        </div>
    )
};

export default Currency;