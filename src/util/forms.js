import React, {Fragment} from 'react';
import { ErrorMessage } from 'formik';

export const Input = (props) => {
  const {
    name,
    type,
    touched,
    error,
    handleChange,
    handleBlur,
    value,
    placeholder
  } = props
  return(
    <Fragment>
      <input className={touched && error?' inputTransparente is-invalid':' inputTransparente'}  type={type} name={name} onChange={handleChange} placeholder={placeholder} value={value} onBlur={handleBlur}/>
      <ErrorMessage name={name}>{msg => <div className="error error-message" style={{color: '#E92F2F'}}>{msg}</div>}</ErrorMessage>
    </Fragment>
  )
}

export const Select = (props) => {
  const {
    name,
    touched,
    error,
    handleChange,
    handleBlur,
    value,
    valueSelect,
    placeholder
  } = props
  return (
    <Fragment>
     {
    placeholder !==undefined &&
    <label style={{ color: '#292D5A',fontSize:'15px' }} >{placeholder}</label>
    }
      <select className={touched && error ? 'form-control is-invalid' : 'form-control'} name={name} onChange={handleChange} value={value} onBlur={handleBlur}>
        <option value='0' key='0'>Select {placeholder}...</option>
        {valueSelect.map(res =>
          <option value={res.id} key={res.id}>{res.label}</option>
        )}
      </select>
      <ErrorMessage name={name}>{msg => <div className="error error-message" style={{ color: '#E92F2F' }}>{msg}</div>}</ErrorMessage>
    </Fragment>
  )
}

export const CheckBox = (props) => {
  const {
    name,
    touched,
    error,
    handleChange,
    handleBlur,
    checked,
    labelName,
    disabled
  } = props
  return (
    <Fragment>
      <input disabled={disabled} checked={checked===true} className={touched && error ? 'form-check-input is-invalid' : "form-check-input"} type="checkbox" onChange={handleChange} name={name} checked={checked} onBlur={handleBlur} />
      <label className="form-check-label" htmlFor={name}>
        {labelName}
      </label>
      <ErrorMessage name={name}>{msg => <div className="error error-message" style={{ color: '#E92F2F' }}>{msg}</div>}</ErrorMessage>
    </Fragment>
  )
}

export const Radio = (props) => {
  const {
    name,
    touched,
    error,
    handleChange,
    handleBlur,
    value,
    labelName,
    checked,
    id,

  } = props
  return (
    <Fragment>
      <input id={id}  className={touched && error ? 'form-radio-input is-invalid' : "form-radio-input"} checked={checked} type="radio" onChange={handleChange} name={name} value={value} onBlur={handleBlur} />
      <label className="form-radio-label" htmlFor={name}>
        {labelName}
      </label>
      <ErrorMessage name={name}>{msg => <div className="error error-message" style={{ color: '#E92F2F' }}>{msg}</div>}</ErrorMessage>
    </Fragment>
  )
}

export const TextArea = (props) => {
  const {
    name,
    touched,
    error,
    handleChange,
    handleBlur,
    value,
    placeholder
  } = props
  return (
    <Fragment>
    {
    placeholder !==undefined && <label style={{ color: '#292D5A' }} ><strong>{placeholder}</strong></label>
    }
      <textarea className={touched && error ? 'form-control is-invalid' : 'form-control'} name={name} onChange={handleChange} style={{ resize: 'none', height: '100px', marginTop: '0px', marginBottom: '0px' }} placeholder={placeholder} value={value} onBlur={handleBlur}>
      </textarea>
      <ErrorMessage name={name}>{msg => <div className="error error-message" style={{ color: '#E92F2F' }}>{msg}</div>}</ErrorMessage>
    </Fragment>
  )
}

export const InputDate = (props) => {
  const {
    name,
    touched,
    error,
    handleChange,
    handleBlur,
    value,
    disabled,
    placeholder
  } = props
  return (
    <Fragment>
      <input className={touched && error ? 'form-control is-invalid' : 'form-control'} type='date' name={name} onChange={handleChange} placeholder={placeholder} value={value} onBlur={handleBlur} disabled={disabled} />
      <ErrorMessage name={name}>{msg => <div className="error error-message" style={{ color: '#E92F2F' }}>{msg}</div>}</ErrorMessage>
    </Fragment>
  )
}
