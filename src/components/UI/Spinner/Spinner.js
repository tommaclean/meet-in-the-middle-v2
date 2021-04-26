import React from 'react'
import Loader from "react-loader-spinner";

const Spinner = () => {
    return ( 
            <Loader type="Rings" color="#00BFFF" height={250} width={250} timeout={3000}/>
    );
}

export default Spinner