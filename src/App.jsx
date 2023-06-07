import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import data from './components/data/data'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import NewArrivals from './components/NewArrivals'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new-arrivals' element={<NewArrivals/>}/>
      </Routes>
    </>
  )
}

export default App
