import { useState } from 'react'

import './App.css'
import { CarDetails } from './components/CarDetails'

export function App() {


  return (
    <div>
      <h1>Desafio de CSS do Curso de React</h1>
      < CarDetails brand={'Ferrari'} />
    </div>
  )
}


