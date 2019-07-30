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
