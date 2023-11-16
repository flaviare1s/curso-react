import { useState } from 'react'
import { FirstComponent } from './components/FirstComponent'
import { TemplateExpressions } from './components/TemplateExpressions'

import './App.css'
import { MyComponent } from './components/MyComponent'
import { Events } from './components/Events'
import { Challenge } from './components/Challenge';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  )
}

export default App
