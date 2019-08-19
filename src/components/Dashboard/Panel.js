import React, {useState} from 'react'
import AddTodo from './Create/AddLibrary'
import ListAuthor from './View/ListAutor'
import {Row, Col, UncontrolledTooltip, Collapse} from 'reactstrap'
import Mas from '../../images/mas.png'
import Menos from '../../images/menos.png'
import {handleRedirect} from '../../util/redirectPage'
import { ModalError, ModalSucces} from '../../util/modal'

const data = {
  author: {
    id: '',
   name: '',
   books : []
  }
}


const Panel = () => {
  const [libraryData, setData] = useState({Library: []})
  const [Status, setStatus] = useState(false)
  const [StatusList, setStatusList] = useState(false)


  const handleChange = (value) => {
    console.log(value);
    let result = false
    for (let i = 0; i < libraryData.Library.length; i++) {
      if(libraryData.library[i].author.name === value.author.name) {
        result = true
        break
      }
    }
    console.log(result);
    if(result === false ) {
      const NewValues = [...libraryData.Library]
      NewValues.push(value)
      setData({
        Library: NewValues
      })
      ModalSucces('Success Author Created', handleRedirect, '/')
    } else {
      ModalError('Author exits')
    }
  }

  return(
    <div className='container-fluid w-100 pr-0' style={{paddingTop: '3%'}}>
      <Row className="row justify-content-center align-items-center w-100">
        <Col lg={12} className='w-100 pr-0'>
          <h3 className='text-center '>Panel Administrative of Library</h3>
          <Row className='w-100'>
            <Col xs={12}  md={12}>
            <Row form className='w-100'>
              <Col  xs={10} md={11}>
                <h4 className='text-center mt-3'>ADD Autor</h4>
              </Col>
                <Col  xs={2} md={1}>
                <UncontrolledTooltip placement="right" target="AddAutor">
                ADD Autor
              </UncontrolledTooltip>
                  <button style={{ backgroundColor: 'transparent', border: 'none' }}
                    type="button"
                    href='#'
                    id='AddAutor'
                    onClick={() => {setStatus(!Status)}}>
                    <img src={Status !== true?Mas:Menos} style={{ height: "20px", cursor: "pointer" }} alt=''></img>
                  </button>
                </Col>
              </Row>
          < Collapse isOpen={Status}>
              <AddTodo setStatus={setStatus}  values={libraryData} data={data} handleChange={handleChange}/>
              </  Collapse>
            </Col>
            <Col xs={12}  md={12} className='mt-3'>
            <Row form className='w-100'>
              <Col  xs={10} md={11}>
                <h4 className='text-center mt-3'>List Autor</h4>
              </Col>
                <Col  xs={2} md={1}>
                <UncontrolledTooltip placement="right" target="ListAutor">
                List Autor
              </UncontrolledTooltip>
                  <button style={{ backgroundColor: 'transparent', border: 'none' }}
                    type="button"
                    href='#'
                    id='ListAutor'
                    onClick={() => {setStatusList(!StatusList)}}>
                    <img src={StatusList !== true?Mas:Menos} style={{ height: "20px", cursor: "pointer" }} alt=''></img>
                  </button>
                </Col>
              </Row>
          < Collapse isOpen={StatusList}>
              <ListAuthor  values={libraryData} data={data} handleChange={handleChange}/>
              </  Collapse>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}


export default Panel
