import React, { Fragment} from 'react';
import Routes from './route'
import NavBar from './Navbar'

const Dashboard = () => {

  return(
    <Fragment>
      <NavBar />
        <Routes/>
    </Fragment>
  )
}

export default  Dashboard
