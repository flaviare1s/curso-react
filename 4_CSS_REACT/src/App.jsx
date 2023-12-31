import './App.css'
import { useState } from 'react'
import { MyComponent } from './components/MyComponent'
import { Title } from './components/Title'

export function App() {
  const n = 15
  const [name] = useState("Matheus")

  const redTitle = true

  return (
    <div className='App'>
      {/* CSS global */}
      <h1>React com CSS</h1>
      
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>

      {/* Inline CSS*/}
      <p style={{color: "blue", backgroundColor: "lightgray", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma Inline</p>

      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={name === "Matheus" ? ({color: "green", backgroundColor: "black"}) : (null)}>CSS dinâmico</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle? ("red-title") : ("title")}>Este título vai ter classe dinâmica</h2>

      {/* CSS Modules */}
      < Title />
    </div>
  )
}


