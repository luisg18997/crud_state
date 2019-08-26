import React, { Fragment, useState, useEffect} from 'react'
import Table from '../../../util/table'
import {UncontrolledTooltip} from 'reactstrap'

const ListBooks = (props) => {
  const {data, authorID} = props
  const [view, setView] = useState([])
  const [rows, setRows] = useState([])



useEffect(() => {
  const HandleData = () => {
    const NewValues = data.map((res) => ({
      id: res.id,
      name: res.name,
      publication_date: res.publication_date,
      editorial: res.editorial,
      book_genre: res.book_genre.join(', '),
      resumen: res.resumen,
      action: (<Fragment>
        <UncontrolledTooltip placement="top" target="editBookView">
        Edit Book
      </UncontrolledTooltip>
          <i className='fa fa-pencil mx-auto pr-2' id='editBookView' style={{fontSize: 20}}></i>
          <UncontrolledTooltip placement="top" target="deleteBookView">
        Delete Book
      </UncontrolledTooltip>
        <i className="fa fa-trash-o mx-auto" id='deleteBookView' style={{fontSize: 20}}></i>
        </Fragment>),
      subRow:
        {
          library:res.ubication.library,
          library_ubication: res.ubication.library_ubication || '',
          responsable: res.ubication.loan.responsable || '',
          card_id: res.ubication.loan.card_id || '',
          withdrawal_date: res.ubication.loan.withdrawal_date || '',
          return_date: res.ubication.loan.return_date || '',
            action: (
              <Fragment>
              <UncontrolledTooltip placement="top" target="editUbicationBookView">
              Edit Ubication the Book
            </UncontrolledTooltip>
                <i className='fa fa-pencil mx-auto' id='editUbicationBookView' style={{fontSize: 20}}></i>
              </Fragment>),
        }
    }))
    console.log(NewValues);
    setRows(NewValues)
  }
  HandleData()
},[])

  return(
    <Fragment>
    <Table rows={rows} view = {view} setView={setView}/>
    </Fragment>
  )
}

export default ListBooks
