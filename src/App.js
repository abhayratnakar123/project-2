import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form1 from './components/form'
import Form2 from './components/Form2'
import Form3 from './components/Form3'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Form1></Form1>} path='/'/>
        <Route element={<Form2></Form2>} path='/form2'/>
        <Route element={<Form3></Form3>} path='/form3'/>
        
      </Routes>
    </div>
  )
}
