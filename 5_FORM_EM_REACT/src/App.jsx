import { useState } from 'react'

import './App.css'
import { MyForm } from './components/MyForm'

export function App() {
 

  return (
    <div>
      <h1>Forms</h1>
      < MyForm user={{name: "Josias", email: "josias@gmail.com"}} />
    </div>
  )
}


