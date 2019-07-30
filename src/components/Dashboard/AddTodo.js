import React from 'react'
import Formik from '../../util/formik'
import LibraryForm from '../forms/LibraryForm'
import LibraryValidation from '../forms/validations/LibraryValidation'

const AddTodo = (props) => {
  const {
    values,
    data,
    handleChange
  } = props

  console.log(data);
  const handleSubmit = (values) => {
    console.log(values);
  }

  return(
    <div className='container-fluid'>
      <div className="row justify-content-center align-items-center  minh-100">
        <div className="col-lg-10">
          <h4 className='text-center'>ADD</h4>
          <Formik
            values={values}
            handleSubmit={handleSubmit}
            validationSchema={LibraryValidation}
            MyForm={LibraryForm}
          />
        </div>
      </div>
    </div>
  )
}


export default AddTodo
