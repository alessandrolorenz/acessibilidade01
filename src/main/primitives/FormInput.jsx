import React from 'react'
import PropTypes from 'prop-types'

function FormInput({
  id,
  type,
  name,
  label,
  helperText,
  errorText,
  onChange,
  isRequired,
  isValid
}) {
  const inputClasses = `form-control ${!isValid ? 'is-valid' : '' }`
  const helperId = helperText ? `${id}-helper` : ''
  const errorId = errorText && !isValid ? `${id}-error` : ''

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}
        type={type}
        name={name}
        className={inputClasses}
        onChange={onChange}
        aria-required={isRequired}
        aria-invalid={!isValid}
        aria-describedby={`${helperId} ${errorId}`}
      />
      { helperText &&
          <smal id={helperId} className="form-text helper-text">
            {helperText}
          </smal>
      }
      { errorText &&
        <div id={errorId} className="invalid-feedback" aria-live="polite">
          {errorText}
          </div>
      }
      
    </div>
  )
}

FormInput.defaultProps = {
  type: 'text',
  errorText: null,
  helperText: null,
  onChange: null,
  isRequired: false,
  isValid: true
};

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  isValid: PropTypes.bool
};


export default FormInput;

