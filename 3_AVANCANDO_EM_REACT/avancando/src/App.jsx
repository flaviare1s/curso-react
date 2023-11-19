import './App.css'

import City from "./assets/city.jpg"
import { ManageData } from './components/ManageData'

function App() {
  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      
      <div>
        {/* Imagem em public */}
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
     
      <div>
         {/* Imagem em assets */}
        <img src={City} alt="Cidade" />
      </div>
      < ManageData />
    </div>
  )
}

export default App
