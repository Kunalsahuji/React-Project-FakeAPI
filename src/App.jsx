import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Nav from './components/Nav'
import Create from './components/Create'

const App = () => {
  return (
    <div className='h-screen w-screen flex'>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>


    </div>
  )
}

export default App
