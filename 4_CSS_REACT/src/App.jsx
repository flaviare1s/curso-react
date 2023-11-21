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
    </div>
  )
}


