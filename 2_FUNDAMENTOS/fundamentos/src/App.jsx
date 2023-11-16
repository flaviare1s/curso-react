import { useState } from 'react'
import { FirstComponent } from './components/FirstComponent'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <FirstComponent/>
  )
}

export default App
