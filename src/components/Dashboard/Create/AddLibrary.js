import React from 'react'
import Formik from '../../../util/formik'
import { ModalError} from '../../../util/modal'
import LibraryForm from '../../forms/LibraryForm'
import LibraryValidation from '../../forms/validations/LibraryValidation'
import {Row, Col} from 'reactstrap'

const AddTodo = (props) => {
  const {
    values,
    data,
    handleChange
  } = props

  const handleSubmit = (NewVal) => {
    console.log(NewVal);
    if(NewVal.author.books.length !== 0) {
      handleChange(NewVal)
    } else {
      ModalError('Please ADD ONE BOOK of the Author')
    }
  }


  return(
    <div className='container-fluid w-100 mt-3 pr-0'>
      <Row className="w-100 justify-content-center align-items-center">
        <Col lg={11} className='w-100 pr-0'>
          <Formik
            values={data}
            handleSubmit={handleSubmit}
            validationSchema={LibraryValidation}
            MyForm={LibraryForm}
          />
        </Col>
      </Row>
    </div>
  )
}


export default AddTodo
