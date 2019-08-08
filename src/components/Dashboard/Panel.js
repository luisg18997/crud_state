import React, {useState} from 'react'
import AddTodo from './AddTodo'

const data = {
  author: {
    id: '',
   name: '',
   books : [
     {
       id: '',
      name: '',
      publication_date: '',
      etidorial: '',
      book_genre: [],
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
    },
   ]
  }
}


const Panel = () => {
  const [libraryData, setData] = useState({Library:data})


  const handleChange = (e) => {
    const {name, value} = e.target
    setData({
      ...libraryData,
      [name]: value
    })
  }

  return(
    <div className='container-fluid' style={{paddingTop: '10%'}}>
      <div className="row justify-content-center align-items-center  minh-100">
        <div className="col-lg-10">
          <h3 className='text-center '>Panel Administrative of Library</h3>
          <AddTodo  values={libraryData} data={data} handleChange={handleChange}/>
        </div>
      </div>
    </div>
  )
}


export default Panel
