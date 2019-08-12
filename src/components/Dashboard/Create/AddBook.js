import React, { Fragment, useState, useEffect} from 'react'
import Formik from '../../../util/formik'
import Table from '../../../util/table'
import BookValidation from '../../forms/validations/BooksValidations'
import BooksForm from '../../forms/booksForm'
import {UncontrolledTooltip} from 'reactstrap'


const AddBook = (props) => {
  const {
    VAl,
    handleData,
  } = props
  const [view, setView] = useState([])
  const [rows, setRows ] = useState([])
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
useEffect(() => {
    handleChangeError()
}, [])


  const handleNewData = (values, id) => {
    const NewValues = [...rows]
    let library
      if(values.ubication.library === 'true') {
        library = 'Yes'
      } else {
        library = 'No'
      }
    NewValues.push({
      id: id,
      name: values.name,
      publication_date: values.publication_date,
      editorial: values.editorial,
      book_genre: values.book_genre.toString(),
      resumen: values.resumen,
      action: (<Fragment>
        <UncontrolledTooltip placement="top" target="editBook">
        Edit Book
      </UncontrolledTooltip>
          <i className='fa fa-pencil mx-auto pr-2' id='editBook' style={{fontSize: 20}}></i>
          <UncontrolledTooltip placement="top" target="deleteBook">
        Delete Book
      </UncontrolledTooltip>
        <i className="fa fa-trash-o mx-auto" id='deleteBook' style={{fontSize: 20}}></i>
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
              <UncontrolledTooltip placement="top" target="editUbicationBook">
              Edit Ubication the Book
            </UncontrolledTooltip>
                <i className='fa fa-pencil mx-auto' id='editUbicationBook' style={{fontSize: 20}}></i>
              </Fragment>),
        }
    })
    setRows(NewValues)
  }


  const handleUpdateData = (value, index) => {
    const updateData = data.books
    updateData[index].edit = false

  }

  const handleDeleteData = (value, index) => {
    const updateData = data.books.splice(index, 1)
    console.log(updateData);
  }

  const handleUpdate = (index) => {
    const updateData = data.books
    updateData[index].edit = true
    console.log(updateData);
  }

  const handleAddnew = (values, action) => {
    console.log(values, action);
    const newData = [...VAl.books];
    let id
    console.log(newData.length);
    if(newData.length === 0) {
      id= 1
    } else {
      id=  newData.length + 1
    }
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
    handleNewData(values, id)
    action.resetForm(data)
  }

  return(
    <Fragment>
    <Formik
      values={data}
      handleSubmit={handleAddnew}
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
