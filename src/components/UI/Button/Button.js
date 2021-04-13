import React from 'react'
import './Button.css'


const Button = (props) => {
    return (
        <div>
            <div className="button">
                {props.children}
            </div>
          
        </div>
    
    )
}


export default Button
