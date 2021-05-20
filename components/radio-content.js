import { useState, useEffect, useRef } from 'react'
import classnames from 'classnames'

export default function RadioContent({ label, checked, children, onChange }) {
  
  const inputElem = useRef()

  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    // set default
    if (checked !== isChecked) setIsChecked(checked)
  }, [checked])

  const handleChange = (e) => {
    const value = e.target.checked;
    setIsChecked(value)
    if (onChange) onChange(value)
  }
  
  return (
    <label className={classnames('radio-content transition-all duration-300 ease-linear pl-12 pr-8 py-5', {'is-checked': isChecked})}>
      { 
        // label && <label className={classnames(' select-none pointer-events-none', { 'text-xxs text-pink-500 top-2': focused || field_input, 'text-xs text-gray-400 top-5': !focused && !field_input })} onMouseDown={() => focusInput()}>{label}</label>
      }
      <h5 className="text-base font-semibold">{ label || 'Enter content title' }</h5>
      <input
        ref={inputElem}
        type="radio"
        name="field_input"
        autoComplete="off"
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="hidden text-sm w-full focus:outline-none"
      />
      <div className={classnames({ 'hidden': !isChecked })}>
        {children}
      </div>
      <style jsx>{`
        .radio-content {
          display: block;
          position: relative;
          background: #FFFFFF;
          box-shadow: 0 0 2px 0 rgba(131,151,171,0.12), 0 4px 8px 0 rgba(131,151,171,0.24);
          border-radius: 6px;
          border: 1px solid transparent;
          cursor: pointer;
        }
        .radio-content.is-checked {
          border-color: #FA4A84;
        }
        .radio-content:before {
          content: '';
          display: inline-block;
          position: absolute;
          top: 22px;
          left: 18px;
          width: 18px;
          height: 18px;
          border-radius: 9px;
          border: 1px solid #EEEFF7;
        }
        .radio-content.is-checked:before {
          border-color: white;
          background-color: #FA4A84;
        }
        @media (max-width: 425px) {}
      `}</style>
    </label>
  )
}
