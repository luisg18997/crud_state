import React, { Fragment, useState, useEffect } from 'react';
import {InputWname, SelectWname, Input, InputDate, TextArea, CheckBox, Radio} from '../../util/forms'
import {Row, Col, FormGroup} from 'reactstrap'

import { UncontrolledTooltip } from 'reactstrap';
import { FieldArray } from 'formik'

import masBtn from '../../images/masBtn.png'

const BooksForms = (props) => {
  const {
    handleBlur,
    values,
    error,
    touched,
    handleData,
  } = props

  const [data, setData] = useState( {
     id: '',
    name: '',
    publication_date: '',
    etidorial: '',
    book_genre: ['' ,'', '', '', '', '', '', '','','', '', ''],
    book_genre_selected: [false,false, false, false, false,false, false, false, false,false, false, false],
    resumen: '',
    ubication: {
      library: 'true',
      library_ubication: '',
      loan: {
        responsable: '',
        withdrawal_date: '',
        return_date: ''
      }
    }
  })
  const [preload, setPreload] = useState(true)

  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleChangeCheckBox = (e, id) => {
    const {name, value, checked} = e.target
    console.log(name, value, checked, id);
    const book_genre =  [...data.book_genre]
    const book_genre_selected = [...data.book_genre_selected]
    console.log(book_genre);
    let newValue = []
    if(checked === true) {
      book_genre_selected[id] = true
      book_genre[id] = value
      newValue = book_genre
    } else {
      newValue = book_genre.filter((val,index, arr) => {
        console.log(val);
        return val !== value
      })
      newValue[id] = ''
      book_genre_selected[id] = false
    }
    console.log(newValue);
    setData({
      ...data,
      [name]: newValue,
      book_genre_selected: book_genre_selected
    })
  }
  useEffect(() => {
    async function handleData(){
      setPreload(false)
    }
    handleData()
  },[values])

  const handleUpdateData = (value, index) => {
    const updateData = data.books
    updateData[index].edit = false
    setData({
      books:[
        ...updateData
      ]
    })
  }

  const handleDeleteData = (value, index) => {
    const updateData = data.books.splice(index, 1)
    console.log(updateData);
    setData({
      books:[
        ...updateData
      ]
    })
  }

  const handleNewData = (value, index) => {
    const updateData = data.books
    updateData[index].edit = false
    setData({
      books:[
        ...updateData
      ]
    })
  }
  const handleUpdate = (index) => {
    const updateData = data.books
    updateData[index].edit = true
    console.log(updateData);
    setData({
      books:[
        ...updateData,
      ]
    })
  //  handleData(updateData[index].edit, true);
  }
  if(preload){
    return(
      <div>Loading...</div>
    )
  }else{
    console.log(data);
    const editForm = (res, index, arrayHelpers) => {
      return(
        <Fragment>
        <div className='col-6 col-md-2'>
          <InputWname name={`books[${index}].bank_name`} error={error.bank_name} touched={touched.bank_name} handleBlur={handleBlur} value={res.bank_name} handleChange={handleChange} placeholder='Book name' />
        </div>
        <div className='col-6 col-md-3'>
          <InputWname name={`books[${index}].routing_bank_numbers`} error={error.routing_bank_numbers} touched={touched.routing_bank_numbers} handleBlur={handleBlur} value={res.routing_bank_numbers} placeholder='Routing bank number' handleChange={handleChange} />
        </div>
        <div className='col-5 col-md-3'>
          <InputWname name={`books[${index}].bank_account_number`} error={error.bank_name} touched={touched.bank_account_number} value={res.bank_account_number} handleChange={handleChange} placeholder='Book account number' />
        </div>
        <div className='col-4 col-md-2'>
        <SelectWname touched={touched.bank_account_type_id} value={res.bank_account_type_id}  error={error.bank_account_type_id} name={`books[${index}].bank_account_type_id`} handleChange={handleChange} handleBlur={handleBlur} valueSelect={[{id:'1',label:'Savings'},{id:'2',label:'Checking'}]} placeholder='Book Account Type' />
        </div>
        <div className='col-3 col-md-2 mt-auto'>
              <button type="button" className="btn " href="#" id='editBook'>
              <i onClick={() => {res.id !== ''?handleUpdateData(res,index):handleNewData(res,index)}} className="fa fa-floppy-o" aria-hidden="true"></i>
              </button>
              <UncontrolledTooltip placement="top" target='editBook' >{res.id !== ''?'Edit save Book Account':'Save Book Account'}</UncontrolledTooltip>
            <button type="button" className="btn "  href="#" id="DeleteBook">
              <i onClick={() => {res.id !== ''?handleDeleteData(res, index): arrayHelpers.remove(index)}} className="fa fa-trash-o" aria-hidden="true" />
            </button>
            <UncontrolledTooltip placement="top"  target='DeleteBook' >Delete Book Account</UncontrolledTooltip>
        </div>
        </Fragment>
      )

    }

    const viewData = (res, index) => {
      return(
        <Fragment>
        <div className='col-6 col-md-2'>
        {res.bank_name}
        </div>
        <div className='col-6 col-md-3'>
        {res.routing_bank_numbers}
        </div>
        <div className='col-5 col-md-3'>
        {res.bank_account_number}
        </div>
        <div className='col-4 col-md-2'>
        {res.bank_account_type}
        </div>
        <div className='col-3 col-md-2 mt-auto'>

            <button type="button" className="btn " href="#" id='editBook'>
              <i  onClick={() => handleUpdate(index)} className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <UncontrolledTooltip placement="top" target='editBook' >Edit Book Account</UncontrolledTooltip>

            <button type="button" className="btn"  href="#" id="DeleteBook">
              <i onClick={() => { handleDeleteData(res, index) }} className="fa fa-trash-o" aria-hidden="true" />
            </button>
            <UncontrolledTooltip placement="top"  target='DeleteBook' >Delete Book Account</UncontrolledTooltip>
        </div>
        </Fragment>
      )
    }

    const Content = (res, index, arrayHelpers) => {
      if(res.edit === true) {
        return editForm(res,index, arrayHelpers);
      } else {
         return viewData(res, index)
      }
    }

    const handleAddnew = () => {
      const newData = data.books;
      newData.push({
        id: '',
        bank_account_number: '',
        bank_account_type: {name: ''},
        bank_name: '',
        routing_bank_numbers: '',
        bank_account_type_id: '',
        edit: true,
      })
      setData(
        {
          books: [
            ...newData,
          ]
        }
      )
    }

    return (
      <Fragment>
        <FieldArray
          name="Library.author.books"
          render={arrayHelpers => (
            <Fragment>
            <Row form>
              <Col  xs={6} md={6}>
                <FormGroup>
                  <Input name='name' value={data.name} handleChange={handleChange} error={error} touched={touched} handleBlur={handleBlur} placeholder="Name of book" />
                </FormGroup>
              </Col>
              <Col  xs={6} md={6}>
                <FormGroup>
                  <InputDate name='publication_date' value={data.publication_date} handleChange={handleChange} error='' touched={touched} handleBlur={handleBlur} placeholder="Publication date" />
                </FormGroup>
              </Col>
              <Col  xs={6} md={6}>
                <FormGroup>
                  <Input name='editorial' value={data.editorial} handleChange={handleChange} error={error} touched={touched} handleBlur={handleBlur} placeholder="Name of Editorial" />
                </FormGroup>
              </Col>
              <Col  xs={6} md={6}>
                <FormGroup>
                <label style={{ color: '#292D5A',fontSize:'15px' }} ><strong>Book Genre</strong></label>
                <Row form>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Drama' name={`book_genre`} value='drama' checked={data.book_genre_selected[0]} handleChange={(e) =>{handleChangeCheckBox(e, 0)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Comedy' name={`book_genre`} value='comedy' checked={data.book_genre_selected[1]}  handleChange={(e) =>{handleChangeCheckBox(e, 1)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Suspense' name={`book_genre`} value='suspense' checked={data.book_genre_selected[2]}  handleChange={(e) =>{handleChangeCheckBox(e, 2)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Self help' name={`book_genre`} value='self help' checked={data.book_genre_selected[3]}  handleChange={(e) =>{handleChangeCheckBox(e, 3)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Adventure' name={`book_genre`} value='adventure' checked={data.book_genre_selected[4]}  handleChange={(e) =>{handleChangeCheckBox(e, 4)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Fiction' name={`book_genre`} value='fiction' checked={data.book_genre_selected[5]}  handleChange={(e) =>{handleChangeCheckBox(e, 5)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Romantic' name={`book_genre`} value='romantic' checked={data.book_genre_selected[6]}  handleChange={(e) =>{handleChangeCheckBox(e, 6)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Childish' name={`book_genre`} value='childish' checked={data.book_genre_selected[7]}  handleChange={(e) =>{handleChangeCheckBox(e, 7)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Terror' name={`book_genre`} value='terror' checked={data.book_genre_selected[8]}  handleChange={(e) =>{handleChangeCheckBox(e, 8)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Historical' name={`book_genre`} value='historical' checked={data.book_genre_selected[9]}  handleChange={(e) =>{handleChangeCheckBox(e, 9)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Biography' name={`book_genre`} value='biography' checked={data.book_genre_selected[10]}  handleChange={(e) =>{handleChangeCheckBox(e, 10)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                  <Col xs={3} md={3} style={{paddingLeft: 25}}>
                    <CheckBox labelName='Erotic' name={`book_genre`} value='erotic' checked={data.book_genre_selected[11]}  handleChange={(e) =>{handleChangeCheckBox(e,11)}} error='' touched={touched} handleBlur={handleBlur} />
                  </Col>
                </Row>
                </FormGroup>
              </Col>
              <Col  xs={12} md={12}>
                <FormGroup>
                  <TextArea name='resumen' value={data.resumen} handleChange={handleChange} error='' touched={touched} handleBlur={handleBlur} placeholder="Resumen of Book" />
                </FormGroup>
              </Col>
              <Col  xs={12} md={12}>
                <FormGroup>
                  <TextArea name='resumen' value={data.resumen} handleChange={handleChange} error='' touched={touched} handleBlur={handleBlur} placeholder="Resumen of Book" />
                </FormGroup>
              </Col>
            </Row>
              {values.books.map((res, index) => (
                <div className='form-row' key={index} style={{ paddingBottom: '1%' }}>
                  {Content(res, index, arrayHelpers)}
                </div>
              ))}
              <button style={{ backgroundColor: 'transparent', border: 'none' }}
                type="button"
                onClick={() => handleAddnew()}>
                <img src={masBtn} style={{ height: "20px", cursor: "pointer" }} alt=''></img>
              </button>
            </Fragment>
          )}
        />
      </Fragment>
    )
  }
}

export default BooksForms
