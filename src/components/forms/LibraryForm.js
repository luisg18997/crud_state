import React, { Fragment } from 'react';
import {Input, TextArea, InputDate, Select, CheckBox, Radio} from '../../util/forms'
import {Row, Form, Col, FormGroup} from 'reactstrap'

const LibraryForm = (props) => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    error,
    touched,
    valuesSelect,
    setFieldValue,
    valueButton,
  } = props

  console.log(props);
  return(
    <Fragment>
      <Form>
        <Row form>
          <Col xs={12} md={6} >
            <FormGroup>
              <Input name='Library.author.name' value={values.Library.author.name} handleChange={handleChange} handleBlur={handleBlur} placeholder="Name of Author" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  )
}


export default LibraryForm
