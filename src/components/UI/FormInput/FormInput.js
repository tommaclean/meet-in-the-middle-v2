import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
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

    <div>
      <h2 className="formInputHeader">Find a meeting place for you and two others!</h2>
       <form onSubmit={handleSubmit}>

      <PlacesAutocomplete
        value={address1}
        onChange={setAddress1}
        onSelect={setAddress1}
        >
     
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="addressInput" >
            <p>Address 1</p>
            

            <input className="inputBox" {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? "#7c8183" : "rgb(181, 181, 181)"
                };

                return (
                  <div key={index} className="suggestions" {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <PlacesAutocomplete
        value={address2}
        onChange={setAddress2}
        onSelect={setAddress2}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="addressInput">
            <p>Address 2</p>
            

            <input className="inputBox" {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion, index) => {
                const style = {
                  backgroundColor: suggestion.active ? "#7c8183" : "rgb(181, 181, 181)"
                };

                return (
                  <div key={index} {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <PlacesAutocomplete
        value={address3}
        onChange={setAddress3}
        onSelect={setAddress3}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="addressInput">
            <p>Address 3</p>
            

            <input className="inputBox" {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion, index) => {
                const style = {
                    backgroundColor: suggestion.active ? "#7c8183" : "rgb(181, 181, 181)"
                };

                return (
                  <div key={index} {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <br></br>
      <br></br>
        <button className="submitButton" type="submit" value="Submit" onClick={handleSubmit}>
            Submit
        </button>
      </form>
    </div>
  );
}

export default FormInput
