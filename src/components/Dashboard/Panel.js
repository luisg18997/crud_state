import React, {useState} from 'react'
import AddTodo from './Create/AddAuthor'
import ListAuthor from './View/ListAutor'
import EditAuthor from './Edit/EditAuthor'
import {Row, Col, UncontrolledTooltip, Collapse} from 'reactstrap'
import Mas from '../../images/mas.png'
import Menos from '../../images/menos.png'
import { ModalError, ModalSucces, ModalConfirm} from '../../util/modal'

const data = {
  author: {
    id: '',
   name: '',
   books : []
  }
}

const Panel = () => {
  const [libraryData, setData] = useState({Library:{ authors: []}})
  const [Status, setStatus] = useState(false)
  const [StatusList, setStatusList] = useState(false)
  const [update, setUpdate] = useState({action: false, Data: {}})



  const HandleAddData = async(value) => { //addd new data in the state
    let result = false
    for (let i = 0; i < libraryData.Library.authors.length; i++) {
      if(libraryData.Library.authors[i].name === value.name) {
        result = true
        break
      }
    }
    if(result === false ) {
      const NewValues = [...libraryData.Library.authors]
      console.log(NewValues);
      NewValues.push(value)
      setData({
        Library: {
          authors: [...NewValues]
        }
      })
      ModalSucces('Author created successfully')
    } else {
      ModalError('The author already exists')
    }
  }

  const handleEditData = async(value) => {
    console.log(value);
    const UpdateData = [...libraryData.Library.authors]
    UpdateData[value.indexAuthor] = {...value.author}
    setData({
      Library: {
        authors: [...UpdateData]
      }
    })
    ModalSucces('Author updated successfully')
  }

  const HandleDeleteConfirmAuthor = (id) => { //function for confirm delete author
    ModalConfirm('Are you sure you want to delete the book?',handleDeleteAuthor, id)
  }

  const HandleDeleteConfirmBook = (idAuthor, idBook) => {  //function for confirm delete book
      ModalConfirm('Are you sure you want to delete the book?',handleDeleteBook, {idAuthor, idBook})
  }

  const handleDeleteBook = (id) => { // function delete book
    let indexAuthor
    for (let i = 0; i < libraryData.Library.authors.length; i++) {
      if(libraryData.Library.authors[i].id === id.idAuthor) {
        indexAuthor= i
        break
      }
    }
    let indexBook
    for (let i = 0; i < libraryData.Library.authors[indexAuthor].books.length; i++) {
      console.log(libraryData.Library.authors[indexAuthor].books[i].id);
      if(libraryData.Library.authors[indexAuthor].books[i].id === id.idBook) {
        indexBook= i
        break
      }
    }
    const UpdateBooks = libraryData.Library.authors[indexAuthor].books.splice(indexBook, 1)
    if( UpdateBooks.indexOf(id) !== -1) {
      ModalError('The book could not be deleted')
    } else {
      const UpdateData = [...libraryData.Library.authors]
      UpdateData[indexAuthor].books = [...UpdateBooks]
    setData({
      ...libraryData,
      Library: {
        authors:  UpdateData
      }
    })
      ModalSucces('The Book was successfully removed')
    }
  }

  const handleDeleteAuthor = (id) => { // function delete author
    let indexAuthor
    for (let i = 0; i < libraryData.Library.authors.length; i++) {
      if(libraryData.Library.authors[i].id === id) {
        indexAuthor= i
        break
      }
    }
    const updateData = libraryData.Library.authors.splice(indexAuthor, 1)
    if( updateData.indexOf(id) !== -1) {
      ModalError('The author could not be deleted')
    } else {
      setData({
        ...libraryData,
        Library: {
          authors: libraryData.Library.authors.splice(indexAuthor, 1)
        }
      })
      ModalSucces('The author was successfully removed')
    }
  }

  const handleSearchAuthor = (id) => {
    let indexAuthor
    for (let i = 0; i < libraryData.Library.authors.length; i++) {
      if(libraryData.Library.authors[i].id === id) {
        indexAuthor= i
        break
      }
    }
    const Data = {...libraryData.Library.authors[indexAuthor]}
    setStatus(true)
    setUpdate({
      ...update,
      action: true,
      data: {
        author: Data,
        editAuthor: true,
        editBook: false,
        indexAuthor
      }
    })
  }

  const handleSearchBook = (idAuthor, idBook) => {
    let indexAuthor
    for (let i = 0; i < libraryData.Library.authors.length; i++) {
      if(libraryData.Library.authors[i].id === idAuthor) {
        indexAuthor= i
        break
      }
    }
    let indexBook
    for (let i = 0; i < libraryData.Library.authors[indexAuthor].books.length; i++) {
      if(libraryData.Library.authors[indexAuthor].books[i].id === idBook) {
        indexBook= i
        break
      }
    }
    console.log(indexBook, indexAuthor);
    const Data = {...libraryData.Library.authors[indexAuthor]}
    setStatus(true)
    setUpdate({
      ...update,
      action: true,
      data: {
        author: Data,
        editAuthor: true,
        editBook: true,
        indexAuthor,
        indexBook
      }
    })
  }

console.log(libraryData);

  return(
    <div className='container-fluid w-100 pr-0' style={{paddingTop: '3%'}}>
      <Row className="row justify-content-center align-items-center w-100">
        <Col lg={12} className='w-100 pr-0'>
          <h3 className='text-center '>Panel Administrative of Library</h3>
          <Row className='w-100'>
          {
            update.action !== true?
            <Col xs={12}  md={12}>
            <Row form className='w-100'>
              <Col  xs={10} md={11}>
                <h4 className='text-center mt-3'>ADD Autor</h4>
              </Col>
                <Col  xs={2} md={1}>
                  <button style={{ backgroundColor: 'transparent', border: 'none' }}
                    type="button"
                    id='CreateAutor'
                    onClick={() => {setStatus(!Status)}}>
                    <img src={Status !== true?Mas:Menos} style={{ height: "20px", cursor: "pointer" }} alt=''></img>
                  </button>
                  <UncontrolledTooltip placement="right" target="CreateAutor">
                  ADD Autor
                </UncontrolledTooltip>
                </Col>
              </Row>
          < Collapse isOpen={Status}>
              <AddTodo setStatus={setStatus} values={libraryData.Library.authors} data={data} handleChange={HandleAddData}/>
              </  Collapse>
            </Col>
            :
            <Col xs={12}  md={12}>
            <Row form className='w-100'>
              <Col  xs={10} md={11}>
                <h4 className='text-center mt-3'>Edit Autor</h4>
              </Col>
                <Col  xs={2} md={1}>
                  <button style={{ backgroundColor: 'transparent', border: 'none' }}
                    type="button"
                    id='editAuthor'
                    onClick={() => {setStatus(!Status)}}>
                    <img src={Status !== true?Mas:Menos} style={{ height: "20px", cursor: "pointer" }} alt=''></img>
                  </button>
                  <UncontrolledTooltip placement="right" target="editAuthor">
                  Edit Autor
                </UncontrolledTooltip>
                </Col>
              </Row>
          < Collapse isOpen={Status}>
              <EditAuthor setStatus={setStatus} setUpdate={setUpdate} values={libraryData.Library.authors} data={update.data} handleChange={handleEditData}/>
              </  Collapse>
            </Col>
          }
            <Col xs={12}  md={12} className='mt-3'>
            <Row form className='w-100'>
              <Col  xs={10} md={11}>
                <h4 className='text-center mt-3'>List Autor</h4>
              </Col>
                <Col  xs={2} md={1}>
                  <button style={{ backgroundColor: 'transparent', border: 'none' }}
                    type="button"
                    href='#'
                    id='ListAutor'
                    onClick={() => {setStatusList(!StatusList)}}>
                    <img src={StatusList !== true?Mas:Menos} style={{ height: "20px", cursor: "pointer" }} alt=''></img>
                  </button>
                  <UncontrolledTooltip placement="right" target="ListAutor">
                  List Autor
                </UncontrolledTooltip>
                </Col>
              </Row>
          < Collapse isOpen={StatusList}>
              <ListAuthor handleSearchAuthor={handleSearchAuthor} handleSearchBook={handleSearchBook} values={libraryData} handleDeleteAuthor={HandleDeleteConfirmAuthor} handleDeleteBook={HandleDeleteConfirmBook}/>
              </  Collapse>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}


export default Panel
