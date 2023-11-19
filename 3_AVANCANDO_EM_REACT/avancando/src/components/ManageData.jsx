import { useState } from "react"

export const ManageData = () => {
    let someData = 10

    const [number, setNumber] = useState(15)

    console.log(number)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Alterar variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </div>
  )
}


