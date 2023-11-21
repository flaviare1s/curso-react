import './App.css'
import { MyComponent } from './components/MyComponent'

export function App() {

  return (
    <div className='App'>
      {/* CSS global*/}
      <h1>React com CSS</h1>
      
      {/* CSS de componente*/}
      <MyComponent />
      <p>Este parágrafo é do AppComponent</p>
      <p className="my-comp-paragraphy">Esse também é do componente</p>
      
    </div>
  )
}


