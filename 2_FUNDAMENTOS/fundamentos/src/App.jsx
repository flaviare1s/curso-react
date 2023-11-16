import { useState } from 'react'
import { FirstComponent } from './components/FirstComponent'
import { TemplateExpressions } from './components/TemplateExpressions'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpressions />
    </div>
  )
}

export default App
