import './App.css'

import City from "./assets/city.jpg"
import { CarDetails } from './components/CarDetails'
import { ConditionalRender } from './components/ConditionalRender'
import { ListRender } from './components/ListRender'
import { ManageData } from './components/ManageData'
import { ShowUserName } from './components/ShowUserName'

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
      < ListRender />
      < ConditionalRender />
      < ShowUserName name="Matheus" />
      < CarDetails brand="Fiat" km={1000000} color="Azul" />
    </div>
  )
}

export default App
