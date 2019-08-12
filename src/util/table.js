import React, {Fragment, useEffect} from 'react'
import {Table} from 'reactstrap';
import Mas from '../images/mas.png'
import Menos from '../images/menos.png'
import { UncontrolledCollapse } from 'reactstrap';
import './assets/table.css'

const TB = (props) => {

  const {rows, view, setView} = props

  const handleAddView = (id) => {
    const NewView = [...view]
    if(id !== NewView.length) {
      if(id < NewView.length) {
        let index = id -1
        NewView.splice(index, 1)
      } else {
        NewView.push(false)
      }
      setView(NewView)
    }
  }

  useEffect(() => {
    handleAddView(rows.length)
  }, [rows])

  const handleChangeView = (id) => {
    const NewView = [...view]
    NewView[id] = !NewView[id]
    setView(NewView)
  }


  const ContentRow = rows.map((res,key) => {
    return(
      <Fragment  key={key}>
      <tr style={{ textAlign: "center" }} >
      <td>
          <img className='img-fluid toggle-icon' onClick={() => {handleChangeView(key)}} src={view[key]!== true? Mas: Menos} alt='mas' id={`contet${key}`}/>
      </td>
      <td>{res.name}</td>
      <td>{res.publication_date}</td>
      <td>{res.editorial}</td>
      <td>{res.book_genre}</td>
      <td>{res.resumen}</td>
      <td>{res.action}</td>
      </tr>
      <tr>
      <td colSpan={7}>
      <UncontrolledCollapse toggler={`#contet${key}`}>
        <Table borderless style={{width: '100%'}}>
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th style={{width: '10%'}}>Library</th>
              <th style={{width: '20%'}}>Ubication Library</th>
              <th style={{width: '15%'}}>Responsable Loan</th>
              <th style={{width: '15%'}}>Card ID Loan</th>
              <th style={{width: '15%'}}>Withdrawal Date</th>
              <th style={{width: '15%'}}>Return Date</th>
              <th style={{width: '10%'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>{res.subRow.library}</td>
              <td>{res.subRow.library_ubication}</td>
              <td>{res.subRow.responsable}</td>
              <td>{res.subRow.card_id}</td>
              <td>{res.subRow.withdrawal_date}</td>
              <td>{res.subRow.return_date}</td>
              <td>{res.subRow.action}</td>
            </tr>
          </tbody>
        </Table>
      </UncontrolledCollapse>
    </td>
    </tr>
    </Fragment>
    )})


  return(
    <Table striped responsive borderless style={{width: '100%'}}>
    <thead>
      <tr style={{ textAlign: "center" }}>
        <th style={{width: '5%'}}></th>
        <th style={{width: '5%'}}>Name</th>
        <th style={{width: '15%'}}>Publication Date</th>
        <th style={{width: '15%'}}>Editorial</th>
        <th style={{width: '20%'}}>Book Genre</th>
        <th style={{width: '25%'}}>Resumen</th>
        <th style={{width: '15%'}}>Action</th>
      </tr>
    </thead>
    <tbody>
      {ContentRow}
    </tbody>
    </Table>
  )
}

export default TB
