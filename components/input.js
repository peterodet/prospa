import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'

export default function Input({ type, label, defaultValue, placeholder, onChange }) {
  
  const inputElem = useRef()

  const [field_input, setFieldInput] = useState('')
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    // set default
    if (defaultValue) setDefault()
  }, [defaultValue])

  const setDefault = () => {
    setFieldInput(defaultValue)
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setFieldInput(value)
    if (onChange) onChange(value)
  }

  const focusInput = () => {
    if (!focused) inputElem.current.focus()
  }
  
  const ph = placeholder || 'Enter amount'

  return (
    <div className={classnames('form-control', {'input-focused': focused})}>
      { 
        label && <label className={classnames('transition-all duration-200 ease-in-out select-none pointer-events-none', { 'text-xxs text-pink-500 top-2': focused || field_input, 'text-xs text-gray-400 top-5': !focused && !field_input })} onMouseDown={() => focusInput()}>{label}</label>
      }
      <input
        ref={inputElem}
        type={type || 'text'}
        name="field_input"
        autoComplete="off"
        value={ field_input }
        // placeholder={ph}
        // minLength={11}
        // maxLength={11}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="text-sm w-full focus:outline-none"
      />
      <style jsx>{`
        input,
        input:-internal-autofill-selected {
          padding: 23px 15px 5px;
          background-color: #f4f8fb;
        }
        label {
          position: absolute;
          left: 15px;
        }
        .form-control {
          position: relative;
        }
        .form-control:before,
        .form-control:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1.05px;
          background: #E0E2EC;
          border-radius: 0.5px;
          transition-duration: 300ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-property: all;
        }
        .form-control:after {
          width: 0;
        }
        .form-control.input-focused {}
        .form-control.input-focused:after {
          height: 2px;
          width: 100%;
          background-image: linear-gradient(269deg, #00D2FF 0%, #7E51FF 51%, #FA4A84 100%);
        }
        @media (max-width: 425px) {}
      `}</style>
    </div>
  )
}
