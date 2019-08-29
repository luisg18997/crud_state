import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const Form = (props) => {
  const {
    values,
    handleSubmit,
    validationSchema,
    MyForm,
    valuesSelect,
    edit,
    handleData,
    handleViewRows,
    valueButton,
  } = props
  return(
    <Formik
     initialValues={values}
     onSubmit={handleSubmit}
     validationSchema={validationSchema}
     children={props => <MyForm
       handleSubmit={props.handleSubmit}
       handleChange={props.handleChange}
       handleBlur={props.handleBlur}
       values={props.values}
       valuesSelect={valuesSelect}
       error={props.errors}
       touched={props.touched}
       valueButton={valueButton}
       setFieldValue={props.setFieldValue}
       handleData={handleData}
       edit={edit}
       handleViewRows={handleViewRows}
       setFieldTouched={props.setFieldTouched}
        />} />
  )
}

Form.propTypes = {
  valuesSelect: PropTypes.object,
  values: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleData: PropTypes.func,
  MyForm: PropTypes.func.isRequired,
  validationSchema: PropTypes.object.isRequired,
  valueButton: PropTypes.bool.isRequired,
  handleViewRows: PropTypes.func,
  edit: PropTypes.bool.isRequired,
};

Form.defaultProps = {
  valuesSelect: {id: 1, label: 'prueba'},
};

export default Form
