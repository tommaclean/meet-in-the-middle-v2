import React, { useState } from 'react'
import Button from '../Button/Button'
import './FormInput.css'



const FormInput = (props) => {
  
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [address3, setAddress3] = useState('')
    
    

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleAddressSubmit({
            e,
            address1,
            address2,
            address3
        })
        setAddress1('')
        setAddress2('')
        setAddress3('')
        props.handleFormInputTransition()
        
    }

    return (
        <div className="formInputMain">   
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Address 1: </label>
                    <input id="autocomplete1" type="text" value={address1} required onChange={(e) => setAddress1(e.target.value)} />
                </p>
                <p>
                    <label>Address 2: </label>
                    <input id="autocomplete2" type="text" value={address2} required onChange={(e) => setAddress2(e.target.value)} />
                </p>
                <p>
                    <label>Address 3: </label>
                    <input id="autocomplete3" type="text" value={address3} onChange={(e) => setAddress3(e.target.value)} />
                </p>
                
            </form>
            <div className="divider"></div>
            <div className="divider"></div>
            <div className="divider"></div>
            <div className="divider"></div>
            <div onClick={handleSubmit}>
                <Button>Submit</Button>
            </div>
        </div>
    )
}

export default FormInput

