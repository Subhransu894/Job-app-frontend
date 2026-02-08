import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import JobForm from './pages/JobForm'
import JobDetails from './pages/JobDetails'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route  path='/' element={< Home/>} />
          <Route path='/jobs/:id' element={<JobDetails/>} />
          <Route  path='/post-job' element={<JobForm/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
