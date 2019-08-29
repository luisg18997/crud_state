import React, {Fragment} from 'react'
import {Row, Col, UncontrolledTooltip} from 'reactstrap'
import ListBooks from './ListBooks'

const ListAutor = (props) => {
  const { values, handleDeleteBook, handleDeleteAuthor, handleSearchAuthor, handleSearchBook} = props
  let Content

  const handleContent = () => {
    if(values.Library.authors.length === 0) {
      Content = (<Fragment><h5 className='text-center'>Autor not registered! please add one</h5></Fragment>);
    } else {
      Content = (<Fragment>
        {values.Library.authors.map((res, key) => {
          return(
            <Fragment key={key}>
            <Col xs={6} md={6}  className='text-center'>{res.name}</Col>
            <Col xs={6} md={6} className='ml-auto'>
              <UncontrolledTooltip placement="top" target="editAuthor">
              Edit Author
            </UncontrolledTooltip>
              <i className='fa fa-pencil mx-auto pr-2' onClick={()=>{handleSearchAuthor(res.id)}} id='editAuthor' style={{fontSize: 20}}></i>
              <UncontrolledTooltip placement="top" target="deleteAuthor">
              Delete Author
            </UncontrolledTooltip>
              <i className="fa fa-trash-o mx-auto" onClick={()=>{handleDeleteAuthor(res.id)}} id='deleteAuthor' style={{fontSize: 20}}></i>
              </Col>
              <Col xs={12} md={12}>
              <ListBooks data={res.books} handleSearchBook={handleSearchBook} authorID={res.id} handleDeleteBook={handleDeleteBook} />
              </Col>
            </Fragment>
          )
        })}
        </Fragment>)
    }
    return(Content)
  }
  handleContent()

  return(
    <div className='container-fluid w-100 mt-3 pr-0'>
      <Row className="w-100 justify-content-center align-items-center">
          {handleContent()}
        </Row>
      </div>
  )
}

export default ListAutor
