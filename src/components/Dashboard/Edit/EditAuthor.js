import React from 'react'
import Formik from '../../../util/formik'
import { ModalError} from '../../../util/modal'
import LibraryForm from '../../forms/LibraryForm'
import LibraryValidation from '../../forms/validations/LibraryValidation'
import {Row, Col} from 'reactstrap'

const EditAuthor = (props) => {
  const {
    data,
    setStatus,
    handleChange,
    setUpdate
  } = props

  const handleSubmit = async(NewVal, action) => {
    if(NewVal.author.books.length !== 0) {
      await handleChange(NewVal)
      await setUpdate({action: false})
      await setStatus(false)
    } else {
      ModalError('Please ADD ONE BOOK of the Author')
    }
  }

  const handleCanceledEdit = () => {
    setUpdate({action: false})
    setStatus(false)
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
            handleViewRows={handleCanceledEdit}
            handleData={handleData}
          />
        </Col>
      </Row>
    </div>
  )
}


export default EditAuthor
