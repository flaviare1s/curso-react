
import './App.css'

import City from "./assets/city.jpg"
import { CarDetails } from './components/CarDetails'
import { ConditionalRender } from './components/ConditionalRender'
import { ListRender } from './components/ListRender'
import { ManageData } from './components/ManageData'
import { ShowUserName } from './components/ShowUserName'
import { Fragment } from './components/Fragment'
import { Container } from './components/Container'

export function App() {
  const cars = [
    {id: 1, brand: 'Ferrari', Color: 'Amarela', newCar: true, km: 0},
    {id: 2, brand: 'KIA', Color: 'Branca', newCar: false, km: 34343},
    {id: 3, brand: 'Renault', Color: 'Azul', newCar: false, km: 234},
  ]

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
      < CarDetails brand="Fiat" km={1000000} color="Azul" newCar={false}/>
      < CarDetails brand="Ford" km={0} color="Vermelha" newCar={true} />
      < CarDetails brand="Fiat" km={200000} color="Preta" newCar={false} />
      {/* Loop em array de objeto: */}
      {cars.map((car) => (
        < CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} />
      ))}
      < Fragment propFragment="teste" />
      <Container>
        <p>Este é o conteúdo</p>
      </Container>
      <Container>
        <p>Testando o container</p>
      </Container>
    </div>
  )
}

