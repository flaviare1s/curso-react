import './App.css'
import { MyComponent } from './components/MyComponent'

export function App() {

  return (
    <div className='App'>
      {/* CSS global*/}
      <h1>React com CSS</h1>
      
      {/* CSS de componente*/}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>

      {/* Inline CSS*/}
      <p style={{color: "blue", backgroundColor: "lightgray", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma Inline</p>
    </div>
  )
}


