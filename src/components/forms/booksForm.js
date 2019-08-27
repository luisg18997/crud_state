import React, { Fragment, useState, useEffect } from 'react';
import { Input, InputDate, TextArea, CheckBox, Radio, Select} from '../../util/forms'
import {Row, Col, FormGroup} from 'reactstrap'
import { UncontrolledTooltip } from 'reactstrap';

import masBtn from '../../images/masBtn.png'

const BooksForms = (props) => {
  const {
    values,
    handleSubmit,
    setFieldValue,
    handleBlur,
    handleData,
    setFieldTouched,
    error,
    touched

  } = props

  const value = [
    {
      id: 'section Drama',
      label: 'section Drama'
    },
    {
      id: 'section Comedy',
      label: 'section Comedy'
    },
    {
      id: 'section Suspense',
      label: 'section Suspense'
    },
    {
      id: 'section Self help',
      label: 'section Self help'
    },
    {
      id: 'section Adventure',
      label: 'section Adventure'
    },
    {
      id: 'section Fiction',
      label: 'section Fiction'
    },
    {
      id: 'section Romantic',
      label: 'section Romantic'
    },
    {
      id: 'section Childish',
      label: 'section Childish'
    },
    {
      id: 'section Terror',
      label: 'section Terror'
    },
    {
      id: 'section Historical',
      label: 'section Historical'
    },
    {
      id: 'section Biography',
      label: 'section Biography'
    },
    {
      id: 'section Erotic',
      label: 'section Erotic'
    },
  ]
  const [valueSelect, setValueSelect] = useState([
  ])

  const {book_genre, ubication: { library}} =values

  const handleChange = (e) => {
    const {name, value} = e.target
    setFieldValue(name, value)
  }

  useEffect(() => { // add newValueSelect to Select
    let newValueSelect = []
    for (let i = 0; i < book_genre.length; i++) {
      for (let j = 0; j < value.length; j++) {
        if(value[j].id.toLowerCase().search(book_genre[i])!== -1) {
          newValueSelect.push(value[j])
        }
      }
    }
    setValueSelect(newValueSelect)
  }, [book_genre])

  const handleChangeCheckBox = (e, id) => { //changes the checkbox
    const {name, value, checked} = e.target
    console.log(name, value, checked, id);
    const book_genre =  [...values.book_genre]
    const book_genre_selected = [...values.book_genre_selected]
    if(checked === true) {
      book_genre_selected[id] = true
      book_genre.push(value)
    } else {
      let index = book_genre.indexOf(value)
      if (index > -1) {
        book_genre.splice(index, 1);
        book_genre_selected[id] = false
      }
  }
  setFieldValue(name, book_genre)
  setFieldValue('book_genre_selected', book_genre_selected)
}

  useEffect(() => { // update selection of the ubication of the book 
    const handleUpdate = () => {
      handleData(library)
      if(library === 'true') {
        setFieldValue('ubication.loan', {
          responsable: '',
          card_id: '',
          withdrawal_date: '',
          return_date: ''
        })
        setFieldTouched('ubication.loan.responsable', false)
        setFieldTouched('ubication.loan.card_id', false)
        setFieldTouched('ubication.loan.withdrawal_date', false)
        setFieldTouched('ubication.loan.return_date', false)
      } else {
        setFieldValue('ubication.library_ubication', '')
        setFieldTouched('ubication.library_ubication', false)
      }
    }
    handleUpdate()
  }, [library])


    return (
            <Fragment>
            <Row form className='w-100'>
              <Col  xs={12} md={12}>
                  <h5 className='text-center'>ADD Books</h5>
                </Col>
              <Col  xs={10} md={11}>
              <p style={{color: 'red'}}>Can add more of a book</p>
              </Col>
              <Col  xs={6} md={6}>
                <FormGroup>
                  <Input name='name' value={values.name} handleChange={handleChange} error={error} touched={touched} handleBlur={handleBlur} placeholder="Name of book" />
                </FormGroup>
              </Col>
              <Col  xs={6} md={6}>
                <FormGroup>
                  <InputDate name='publication_date' value={values.publication_date} handleChange={handleChange} error='' touched={touched} handleBlur={handleBlur} placeholder="Publication date" />
                </FormGroup>
              </Col>
              <Col  xs={6} md={6}>
                <FormGroup>
                  <Input name='editorial' value={values.editorial} handleChange={handleChange} error={error} touched={touched} handleBlur={handleBlur} placeholder="Name of Editorial" />
                </FormGroup>
              </Col>
              <Col  xs={12} md={6}>
                <FormGroup>
                <label style={{ color: '#292D5A',fontSize:'15px' }} ><strong>Book Genre</strong></label>
                <Row form className='w-100'>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Drama' name={`book_genre`} value='drama' checked={values.book_genre_selected[0]} handleChange={(e) =>{handleChangeCheckBox(e, 0)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Comedy' name={`book_genre`} value='comedy' checked={values.book_genre_selected[1]}  handleChange={(e) =>{handleChangeCheckBox(e, 1)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Suspense' name={`book_genre`} value='suspense' checked={values.book_genre_selected[2]}  handleChange={(e) =>{handleChangeCheckBox(e, 2)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Self help' name={`book_genre`} value='self help' checked={values.book_genre_selected[3]}  handleChange={(e) =>{handleChangeCheckBox(e, 3)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Adventure' name={`book_genre`} value='adventure' checked={values.book_genre_selected[4]}  handleChange={(e) =>{handleChangeCheckBox(e, 4)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Fiction' name={`book_genre`} value='fiction' checked={values.book_genre_selected[5]}  handleChange={(e) =>{handleChangeCheckBox(e, 5)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Romantic' name={`book_genre`} value='romantic' checked={values.book_genre_selected[6]}  handleChange={(e) =>{handleChangeCheckBox(e, 6)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Childish' name={`book_genre`} value='childish' checked={values.book_genre_selected[7]}  handleChange={(e) =>{handleChangeCheckBox(e, 7)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Terror' name={`book_genre`} value='terror' checked={values.book_genre_selected[8]}  handleChange={(e) =>{handleChangeCheckBox(e, 8)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Historical' name={`book_genre`} value='historical' checked={values.book_genre_selected[9]}  handleChange={(e) =>{handleChangeCheckBox(e, 9)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Biography' name={`book_genre`} value='biography' checked={values.book_genre_selected[10]}  handleChange={(e) =>{handleChangeCheckBox(e, 10)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Erotic' name={`book_genre`} value='erotic' checked={values.book_genre_selected[11]}  handleChange={(e) =>{handleChangeCheckBox(e,11)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                </Row>
                </FormGroup>
              </Col>
              <Col  xs={12} md={12}>
                <FormGroup>
                  <TextArea name='resumen' value={values.resumen} handleChange={handleChange} error='' touched={touched} handleBlur={handleBlur} placeholder="Resumen of Book" />
                </FormGroup>
              </Col>
              <Col  xs={10} md={11}>
                <h5 className='text-center'>Ubication of Book</h5>
              </Col>
              <Col  xs={12} md={12}>
                <FormGroup>
                  <Row form className='w-100'>
                    <Col  xs={10} md={9}>
                      <label style={{ color: '#292D5A',fontSize:'15px' }} ><strong>The Book is in the Library?</strong></label>
                    </Col>
                    <Col  xs={2} md={3}>
                      <FormGroup>
                        <Row form className='w-100'>
                          <Col xs={7} md={3} className='pr-1 text-center pt-2'>
                            <Radio name='ubication.library' labelName='Yes' value={true}  handleChange={handleChange} handleBlur={handleBlur} checked={values.ubication.library==='true'} />
                          </Col>
                          <Col xs={7} md={3} className='pr-1 text-center pt-2'>
                            <Radio name='ubication.library' labelName='No' value={false}  handleChange={handleChange} handleBlur={handleBlur} checked={values.ubication.library==='false'} />
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              {
                library === 'true'?
                <Fragment>
                  <Col  xs={12} md={12}>
                    <FormGroup>
                      <Select   name='ubication.library_ubication' touched={touched}   error=''  handleChange={handleChange} handleBlur={handleBlur} value={values.ubication.library_ubication} valueSelect={valueSelect}  placeholder='Ubication library' />
                    </FormGroup>
                  </Col>
                </Fragment>
                :
                <Fragment>
                  <Col  xs={10} md={11}>
                    <h5 className='text-center'>Loan</h5>
                  </Col>
                  <Col  xs={6} md={6}>
                    <FormGroup>
                      <Input name='ubication.loan.responsable' value={values.ubication.loan.responsable} handleChange={handleChange} error={error} touched={touched} handleBlur={handleBlur} placeholder="Name of Responsable" />
                    </FormGroup>
                  </Col>
                  <Col  xs={6} md={6}>
                    <FormGroup>
                      <Input name='ubication.loan.card_id' value={values.ubication.loan.card_id} handleChange={handleChange} error={error} touched={touched} handleBlur={handleBlur} placeholder="Card ID of responsable " />
                    </FormGroup>
                  </Col>
                  <Col  xs={6} md={6}>
                    <FormGroup>
                      <InputDate name='ubication.loan.withdrawal_date' value={values.ubication.loan.withdrawal_date} handleChange={handleChange} error='' touched={touched} handleBlur={handleBlur} placeholder="Withdrawal date" />
                    </FormGroup>
                  </Col>
                  <Col  xs={6} md={6}>
                    <FormGroup>
                      <InputDate name='ubication.loan.return_date' value={values.ubication.loan.return_date} handleChange={handleChange} error='' touched={touched} handleBlur={handleBlur} placeholder="Return date" />
                    </FormGroup>
                  </Col>
                </Fragment>
              }
              <Col  xs={'auto'} md={'auto'}>
                <button style={{ backgroundColor: 'transparent', border: 'none' }}
                  type="button"
                  id='addBook'
                  href='#'
                  onClick={handleSubmit}>
                  <img src={masBtn} style={{ height: "20px", cursor: "pointer" }} alt=''></img>
                </button>
                <UncontrolledTooltip placement="right" target="addBook">
                ADD Book
              </UncontrolledTooltip>
              </Col>
            </Row>
      </Fragment>
    )
}

export default BooksForms
