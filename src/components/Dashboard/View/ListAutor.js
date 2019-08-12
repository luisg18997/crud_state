import React, {Fragment, useEffect} from 'react'
import {Row, Col, UncontrolledTooltip} from 'reactstrap'

const ListAutor = (props) => {
  const { values} = props
console.log(values.Library.length);
  let Content

  const handleContent = () => {
    if(values.Library.length === 0) {
      Content = (<Fragment><h5 className='text-center'>Add Autor</h5></Fragment>);
    } else {
      Content = (<Fragment>
        <Row>
        {values.Library.map((res, key) => {
          return(
            <Fragment key={key}>
            <Col xs={6} md={6}  className='mr-auto'>{res.author.name}</Col>
            <Col xs={6} md={6} className='ml-auto'>
              <UncontrolledTooltip placement="top" target="editAuthor">
              Edit Author
            </UncontrolledTooltip>
              <i className='fa fa-pencil mx-auto pr-2' id='editAuthor' style={{fontSize: 20}}></i>
              <UncontrolledTooltip placement="top" target="deleteAuthor">
              Delete Author
            </UncontrolledTooltip>
              <i className="fa fa-trash-o mx-auto" id='deleteAuthor' style={{fontSize: 20}}></i>
              </Col>
            </Fragment>
          )
        })}
        </Row></Fragment>)
    }
    return(Content)
  }
  handleContent()

  return(
    <div className='container-fluid w-100 mt-3 pr-0'>
      <Row className="w-100 justify-content-center align-items-center">
        <Col lg={11} className='w-100 pr-0'>
          {handleContent()}
        </Col>
        </Row>
      </div>
  )
}

export default ListAutor
