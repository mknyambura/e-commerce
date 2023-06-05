import { useState } from 'react'
// import { commerce } from './lib/commerce';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
