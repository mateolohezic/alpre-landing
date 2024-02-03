import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/*' element={<Navigate to ='/'/>}/>
      </Routes>
    </>
  )
}

export default App