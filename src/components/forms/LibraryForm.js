import React, { Fragment } from 'react';
import {Input} from '../../util/forms'
import {Row, Form, Col, FormGroup} from 'reactstrap'
import AddBook from '../Dashboard/Create/AddBook'

const LibraryForm = (props) => {
  const {
    handleSubmit,
    handleBlur,
    values,
    error,
    touched,
    setFieldValue,
  } = props

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(name, value);
    setFieldValue(name, value)
  }
  console.log(props);
  return(
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col xs={12} md={12} >
            <FormGroup>
              <Input name='author.name' value={values.author.name} handleChange={handleChange} error={error} touched={touched} handleBlur={handleBlur} placeholder="Name of Author" />
            </FormGroup>
          </Col>
          <Col xs={12} md={12} className='pr-0' >
            <AddBook VAl={values.author} handleData={handleChange} error={error} touched={touched} handleBlur={handleBlur} />
          </Col>
          <Col xs={12} className='text-center'>
            <button type="submit" className="btn btn-success mt-2 pl-5 pr-5"><strong className='letter'><span>SEND</span></strong></button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}


export default LibraryForm
