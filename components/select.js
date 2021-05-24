import { useState, useEffect, useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

export default function Select({ type, label, defaultValue, placeholder, onChange, options = [] }) {
  
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
    <TextField
      id="input-select"
      select
      fullWidth
      label={label || 'Select an option'}
      value={field_input}
      onChange={handleChange}
      size="small"
      variant="filled"
    >
      {options.map((opt, i) => (
        <MenuItem key={i} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
    // <div className={classnames('form-control pr-3', {'input-focused': focused})}>
    //   { 
    //     label && <label className={classnames('transition-all duration-200 ease-in-out select-none pointer-events-none', { 'text-xxs text-pink-500 top-2': focused || field_input, 'text-xs text-gray-400 top-5': !focused && !field_input })} onMouseDown={() => focusInput()}>{label}</label>
    //   }
    //   {/* <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#FFF" d="M-434-40h1440v900H-434z"/><path d="M14.667-8A5.333 5.333 0 0120-2.667v21.334A5.333 5.333 0 0114.667 24H-6.667A5.333 5.333 0 01-12 18.667V-2.667A5.333 5.333 0 01-6.667-8h21.334zm0 1.333H-6.667a4 4 0 00-3.993 3.765l-.007.235v21.334a4 4 0 003.765 3.993l.235.007h21.334a4 4 0 003.993-3.765l.007-.235V-2.667a4 4 0 00-3.765-3.993l-.235-.007z" fill="#EEEFF7" fillRule="nonzero"/><path d="M7.688 16L8.8 14.875 2.191 7.99l.705-.735-.004.004 5.872-6.117L7.669 0C6.046 1.69 1.514 6.411 0 7.99L7.688 16" fill="#8397AB"/></g></svg> */}
    //   <select
    //     ref={inputElem}
    //     name="field_input"
    //     autoComplete="off"
    //     value={ field_input }
    //     // placeholder={ph}
    //     // minLength={11}
    //     // maxLength={11}
    //     onChange={handleChange}
    //     onFocus={() => setFocused(true)}
    //     onBlur={() => setFocused(false)}
    //     className="text-sm w-full focus:outline-none"
    //   >
    //     <option value=""></option>
    //     { optionsGroup }
    //   </select>
    //   <style jsx>{`
    //     select,
    //     select:-internal-autofill-selected {
    //       padding: 25px 15px 7px;
    //       background-color: #f4f8fb;
    //     }
    //     label {
    //       position: absolute;
    //       left: 15px;
    //     }
    //     .form-control {
    //       position: relative;
    //       background-color: #f4f8fb;
    //     }
    //     .form-control:before,
    //     .form-control:after {
    //       content: '';
    //       position: absolute;
    //       bottom: 0;
    //       left: 0;
    //       width: 100%;
    //       height: 1.05px;
    //       background: #E0E2EC;
    //       border-radius: 0.5px;
    //       transition-duration: 300ms;
    //       transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    //       transition-property: all;
    //     }
    //     .form-control:after {
    //       width: 0;
    //     }
    //     .form-control.input-focused {}
    //     .form-control.input-focused:after {
    //       height: 2px;
    //       width: 100%;
    //       background-image: linear-gradient(269deg, #00D2FF 0%, #7E51FF 51%, #FA4A84 100%);
    //     }
    //     @media (max-width: 425px) {}
    //   `}</style>
    // </div>
  )
}
