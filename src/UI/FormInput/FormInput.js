import React, { useState } from 'react'


const FormInput = ({ handleAddressSubmit }) => {
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [address3, setAddress3] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddressSubmit({
            address1: address1,
            address2: address2,
            address3: address3
        })
        setAddress1('')
        setAddress2('')
        setAddress3('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Address 1: </label>
            <input type="text" value={address1} required onChange={(e) => setAddress1(e.target.value)} />
            <label>Address 2: </label>
            <input type="text" value={address2} required onChange={(e) => setAddress2(e.target.value)} />
            <label>Address 3: </label>
            <input type="text" value={address3} required onChange={(e) => setAddress3(e.target.value)} />
            <input type="submit" value="submit addresses" />
        </form>
    )
}

export default FormInput