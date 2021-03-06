import React, { Fragment, useState, useEffect} from 'react'
import Table from '../../../util/table'
import {UncontrolledTooltip} from 'reactstrap'

const ListBooks = (props) => {
  const {data, authorID, handleDeleteBook, handleSearchBook} = props
  const [view, setView] = useState([])
  const [rows, setRows] = useState([])



useEffect(() => {
  const HandleData = () => {
    const NewValues = data.map((res) => {
      let library
      if(res.ubication.library === 'true') {
        library = 'Yes'
      } else {
        library = 'No'
      }
      return({
      id: res.id,
      name: res.name,
      publication_date: res.publication_date,
      editorial: res.editorial,
      book_genre: res.book_genre.join(', '),
      resumen: res.resumen,
      action: (<Fragment>
        <UncontrolledTooltip placement="top" target={`editBookView${authorID}${res.id}`}>
        Edit Book
      </UncontrolledTooltip>
          <i className='fa fa-pencil mx-auto pr-2' id={`editBookView${authorID}${res.id}`} onClick={()=>{handleSearchBook(authorID,res.id)}} style={{fontSize: 20, cursor: 'pointer'}}></i>
          <UncontrolledTooltip placement="top" target={`deleteBookView${authorID}${res.id}`}>
        Delete Book
      </UncontrolledTooltip>
        <i className="fa fa-trash-o mx-auto" id={`deleteBookView${authorID}${res.id}`} onClick={()=>{handleDeleteBook(authorID, res.id)}} style={{fontSize: 20, cursor: 'pointer'}}></i>
        </Fragment>),
      subRow:
        {
          library: library,
          library_ubication: res.ubication.library_ubication || '',
          responsable: res.ubication.loan.responsable || '',
          card_id: res.ubication.loan.card_id || '',
          withdrawal_date: res.ubication.loan.withdrawal_date || '',
          return_date: res.ubication.loan.return_date || '',
            action: (
              <Fragment>
              <UncontrolledTooltip placement="top" target={`editUbicationBookView${authorID}${res.id}`}>
              Edit Ubication the Book
            </UncontrolledTooltip>
                <i className='fa fa-pencil mx-auto' onClick={()=>{handleSearchBook(authorID,res.id)}} id={`editUbicationBookView${authorID}${res.id}`} style={{fontSize: 20, cursor: 'pointer'}}></i>
              </Fragment>),
        }
    })})
    console.log(NewValues);
    setRows(NewValues)
  }
  HandleData()
},[data])

  return(
    <Fragment>
    <Table rows={rows} view = {view} setView={setView}/>
    </Fragment>
  )
}

export default ListBooks
