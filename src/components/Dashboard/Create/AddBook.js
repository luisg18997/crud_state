import React, { Fragment, useState} from 'react'
import Formik from '../../../util/formik'
import Table from '../../../util/table'
import BookValidation from '../../forms/validations/BooksValidations'
import BooksForm from '../../forms/booksForm'
import {UncontrolledTooltip} from 'reactstrap'
import { ModalError, ModalSucces, ModalConfirm} from '../../../util/modal'


const AddBook = (props) => {
  const {
    VAl,
    handleData,
    view, setView,
    rows, setRows
  } = props
  const [error, setError] = useState({})
  const data = {
     id: '',
    name: '',
    publication_date: '',
    editorial: '',
    book_genre: [],
    book_genre_selected: [false,false, false, false, false,false, false, false, false,false, false, false],
    resumen: '',
    ubication: {
      library: 'true',
      library_ubication: '',
      loan: {
        responsable: '',
        card_id: '',
        withdrawal_date: '',
        return_date: ''
      }
    }
  }

const handleChangeError = (value) => {
  if(value ===  'false') {
    setError(BookValidation(false))
  } else {
    setError(BookValidation(true))
  }
}


  const handleNewData = (values, id, setFieldValue) => { // add roe in the table
    const NewValues = [...rows]
    let library
      if(values.ubication.library === 'true') {
        library = 'Yes'
      } else {
        library = 'No'
      }
      const data = {...values, id : id}
    NewValues.push({
      id: id,
      name: values.name,
      publication_date: values.publication_date,
      editorial: values.editorial,
      book_genre: values.book_genre.join(', '),
      resumen: values.resumen,
      action: (<Fragment>
        <UncontrolledTooltip placement="top" target={`editBook${id}`} >
        Edit Book
      </UncontrolledTooltip>
          <i className='fa fa-pencil mx-auto pr-2' onClick={()=>{handleUpdateData(data, setFieldValue)}} id={`editBook${id}`} style={{fontSize: 20, cursor: 'pointer'}}></i>
          <UncontrolledTooltip placement="top" target={`deleteBook${id}`} >
        Delete Book
      </UncontrolledTooltip>
        <i className="fa fa-trash-o mx-auto" onClick={()=>{handleDeleteData(id)}} id={`deleteBook${id}`} style={{fontSize: 20, cursor: 'pointer'}}></i>
        </Fragment>),
      subRow:
        {
          library:library,
          library_ubication: values.ubication.library_ubication || '',
          responsable: values.ubication.loan.responsable || '',
          card_id: values.ubication.loan.card_id || '',
          withdrawal_date: values.ubication.loan.withdrawal_date || '',
          return_date: values.ubication.loan.return_date || '',
            action: (
              <Fragment>
              <UncontrolledTooltip placement="top" target={`editUbicationBook${id}`}>
              Edit Ubication the Book
            </UncontrolledTooltip>
                <i className='fa fa-pencil mx-auto' target={`editUbicationBook${id}`} onClick={()=>{handleUpdateData(data, setFieldValue)}} style={{fontSize: 20, cursor: 'pointer'}}></i>
              </Fragment>),
        }
    })
    setRows(NewValues)
  }

  const UpdateRows = (value) => { // update row exist
    let library
      if(value.ubication.library === 'true') {
        library = 'Yes'
      } else {
        library = 'No'
      }
    const NewValues = [...rows]
    let index
    for (let i = 0; i < NewValues.length; i++) {
      if(value.id === NewValues[i].id) {
        index= i
        console.log(index);
        break
      }
    }
    NewValues[index] = {
      ...rows[index],
      name: value.name,
      publication_date: value.publication_date,
      editorial: value.editorial,
      book_genre: value.book_genre.join(', '),
      resumen: value.resumen,
      subRow:
        {
            ...rows[index].subRow,
          library:library,
          library_ubication: value.ubication.library_ubication || '',
          responsable: value.ubication.loan.responsable || '',
          card_id: value.ubication.loan.card_id || '',
          withdrawal_date: value.ubication.loan.withdrawal_date || '',
          return_date: value.ubication.loan.return_date || '',
        }
    }
    setRows(NewValues)
  }


  const handleUpdateData = (value, setFieldValue) => { // update data of book in the state
    const book_genre_selected = updateBookGenreSelected(value.book_genre)
    setFieldValue('id', value.id)
    setFieldValue('name', value.name)
    setFieldValue('publication_date', value.publication_date)
    setFieldValue('editorial', value.editorial)
    setFieldValue('resumen', value.resumen)
    setFieldValue('book_genre', value.book_genre)
    setFieldValue('book_genre_selected', book_genre_selected)
    setFieldValue('ubication', {library: value.ubication.library,
    library_ubication: value.ubication.library_ubication, loan: {
      responsable:  value.ubication.loan.responsable,
      card_id:  value.ubication.loan.card_id,
      withdrawal_date:  value.ubication.loan.withdrawal_date,
      return_date:  value.ubication.loan.return_date,
    }})
  }

  const updateBookGenreSelected = (value) => { // get data of book genre selected
    let Update = [...data.book_genre_selected]
    const values = value.map((res) => {
      let NewValue = [];
      switch (res) {
        case 'drama': {
          NewValue[0] = true
          break;
        }
        case 'comedy': {
          NewValue[1] = true
          break;
        }
        case 'suspense': {
          NewValue[2] = true
          break;
        }
        case 'self help': {
          NewValue[3] = true
          break;
        }
        case 'adventure': {
          NewValue[4] = true
          break;
        }
        case 'fiction': {
          NewValue[5] = true
          break;
        }
        case 'romantic': {
          NewValue[6] = true
          break;
        }
        case 'childish': {
          NewValue[7] = true
          break;
        }
        case 'terror': {
          NewValue[8] = true
          break;
        }
        case 'historical': {
          NewValue[9] = true
          break;
        }
        case 'biography': {
          NewValue[10] = true
          break;
        }
        case 'erotic': {
          NewValue[11] = true
          break;
        }

        default:

      }

      return  NewValue
    })
    for (let i = 0; i < values.length; i++) {
      const index = values[i].indexOf(true)
      Update[index] = values[i][index]
    }
    return Update
  }

  const handleDeleteData = (id) => { //confirm delete data
    ModalConfirm('Are you sure you want to delete the book?',handleDeleteRow, id)
  }

  const handleDeleteRow = (id) => { // delete data in the row
    const index = rows.indexOf(id)
    const updateData = rows.splice(index, 1)
    if( updateData.indexOf(id) !== -1) {
      ModalError('The book could not be deleted')
    } else {
      setRows(updateData)
      handleDelete(id)
    }
  }

  const handleDelete = (id) => { // delete data in the state
    const index = VAl.books.indexOf(id)
    const updateData = VAl.books.splice(index, 1)
    console.log(updateData);
    if( updateData.indexOf(id) !== -1) {
      ModalError('The book could not be deleted')
    } else {
      const NewValues = {
        target:{
          value: updateData,
          name: 'author.books'
        }
      }
      ModalSucces('The Book was successfully removed', handleData, NewValues)
    }
  }


  const handleUpdate =  (values, action) => { //update data in the state
    console.log(values, action);
    const newData = [...VAl.books];
    let index
    for (let i = 0; i < newData.length; i++) {
      if(values.id === newData[i].id) {
        index= i
        break
      }
    }
    newData[index] = {...values}
    const NewValues = {
      target:{
        value: newData,
        name: 'author.books'
      }
    }
    handleData(NewValues)
    UpdateRows(values)
    action.resetForm(data)
  }

  const handleSubmit = async(values, action) => { // get data of form of the book
    if(values.id === '') {
      await handleAddnew(values, action)
    } else {
      await handleUpdate(values, action)
    }
  }

  const handleAddnew = (values, action) => { // add new book in the state
    const newData = [...VAl.books];
    let id = newData.length + 1
    newData.push({
      id: id,
     name: values.name,
     publication_date: values.publication_date,
     editorial: values.editorial,
     book_genre: values.book_genre,
     resumen: values.resumen,
     ubication: {
       library: values.ubication.library,
       library_ubication: values.ubication.library_ubication,
       loan: {
         responsable: values.ubication.loan.responsable,
         card_id: values.ubication.loan.card_id,
         withdrawal_date: values.ubication.loan.withdrawal_date,
         return_date: values.ubication.loan.return_date
       }
     }
    })
    const NewValues = {
      target:{
        value: newData,
        name: 'author.books'
      }
    }
    console.log(newData);
    handleData(NewValues)
    handleNewData(values, id, action.setFieldValue)
    action.resetForm(data)
  }

  return(
    <Fragment>
    <Formik
      values={data}
      handleSubmit={handleSubmit}
      edit={false}
      validationSchema={error}
      handleData={handleChangeError}
      MyForm={BooksForm}
    />
    {
      rows.length !== 0 &&
      <Fragment>
        <h3 className='text-center'><b>List Books</b></h3>
        <Table rows={rows} view = {view} setView={setView}/>
      </Fragment>
    }
    </Fragment>

  )
}

export default AddBook
