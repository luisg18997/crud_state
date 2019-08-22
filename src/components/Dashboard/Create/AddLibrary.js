import React from 'react'
import Formik from '../../../util/formik'
import { ModalError} from '../../../util/modal'
import LibraryForm from '../../forms/LibraryForm'
import LibraryValidation from '../../forms/validations/LibraryValidation'
import {Row, Col} from 'reactstrap'

const AddTodo = (props) => {
  const {
    values,
    setStatus,
    data,
    handleChange
  } = props

  const handleSubmit = (NewVal, action) => {
    console.log(action);
    if(NewVal.author.books.length !== 0) {
      console.log(values);
      handleChange(NewVal)
      setStatus(false)
    } else {
      ModalError('Please ADD ONE BOOK of the Author')
    }
  }

  const handleData= (setView, setRows) => {
    setView([])
    setRows([])
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
            handleData={handleData}
          />
        </Col>
      </Row>
    </div>
  )
}


export default AddTodo
