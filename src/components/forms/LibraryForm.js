import React, { Fragment } from 'react';
import {Input, TextArea, InputDate, Select, CheckBox, Radio} from '../../util/forms'
import {Row, Form, Col, FormGroup} from 'reactstrap'
import BooksForm from './booksForm'

const LibraryForm = (props) => {
  const {
    handleSubmit,
    handleBlur,
    values,
    error,
    touched,
    valuesSelect,
    setFieldValue,
    valueButton,
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
              <Input name='Library.author.name' value={values.Library.author.name} handleChange={handleChange} error={error} touched={touched} handleBlur={handleBlur} placeholder="Name of Author" />
            </FormGroup>
          </Col>
          <Col xs={12} md={12} >
            <BooksForm values={values.Library.author} handleData={handleChange} error={error} touched={touched} handleBlur={handleBlur} />
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}


export default LibraryForm
