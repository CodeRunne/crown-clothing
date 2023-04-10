import React from 'react'

// Stylesheet
import './form-input.scss';


function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
        <input className="form-input" {...otherProps} onChange={handleChange} />
        {
            label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> 
        }
    </div>
  )
}

export default FormInput