import React, { useState } from 'react'
import classes from './FormInput.module.css'


const FormInput = ({ handleAddressSubmit }) => {
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [address3, setAddress3] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddressSubmit({
            e,
            address1,
            address2,
            address3
        })
        setAddress1('')
        setAddress2('')
        setAddress3('')
    }

    return (
        <div className={classes.FormInput}>   
            <form onSubmit={handleSubmit}>
                <label>Address 1: </label>
                <input id="autocomplete1" type="text" value={address1} required onChange={(e) => setAddress1(e.target.value)} />
                <label>Address 2: </label>
                <input id="autocomplete2" type="text" value={address2} required onChange={(e) => setAddress2(e.target.value)} />
                <label>Address 3: </label>
                <input id="autocomplete3" type="text" value={address3} required onChange={(e) => setAddress3(e.target.value)} />
                <input type="submit" value="submit addresses" />
            </form>
        </div>
    )
}

export default FormInput

