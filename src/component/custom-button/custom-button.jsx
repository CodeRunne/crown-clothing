import React from 'react'

// Stylesheet
import './custom-button.scss';


function CustomButton({ children, inverted, ...otherProps }) {
  return (
    <button className={`${inverted ? 'inverted' : ''} custom-button`} {...otherProps}>
        { children }
    </button>
  )
}

export default CustomButton;