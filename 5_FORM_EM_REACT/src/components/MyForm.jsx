import { useState } from 'react'
import './MyForm.css'

export const MyForm = () => {
  // 3. Gerenciamento de dados:
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

   console.log(name)

  return (
    <div>
      {/* 1. Criação de forms: */}
      <form>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="name" placeholder="Digite o seu nome" onChange={handleName} />
        </div>
        {/* 2. Label envolvendo input: */}
        <label>
          <span>E-mail: </span>
          <input type="email" name="email" id="email" placeholder='Digite o seu email' />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

