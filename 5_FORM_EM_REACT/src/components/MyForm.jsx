import { useState } from 'react'
import './MyForm.css'

export const MyForm = () => {
  // 3. Gerenciamento de dados:
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

   // console.log(name)
   // console.log(email)

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando o formulário")
    console.log(name)
    console.log(email)
   }

  return (
    <div>
      {/* 1. Criação de forms: */}
      {/* 5. Envio de form: */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="name" placeholder="Digite o seu nome" onChange={handleName} />
        </div>
        {/* 2. Label envolvendo input: */}
        <label>
          <span>E-mail: </span>
          {/* 4. Simplificação de manipulação de state: */}
          <input type="email" name="email" id="email" placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

