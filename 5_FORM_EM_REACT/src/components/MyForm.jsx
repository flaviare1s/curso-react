import { useState } from 'react'
import './MyForm.css'

export const MyForm = (user) => {
  // 6. Controled inputs:
  // 3. Gerenciamento de dados:
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState("")

  const [role, setRole] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

   // console.log(name)
   // console.log(email)

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Enviando o formulário")
    console.log(name, email, bio, role)
    
    // 7. Limpar formulário:
    setName("")
    setEmail("")
    setBio("")
    setRole("")
   }

  return (
    <div>
      {/* 1. Criação de forms: */}
      {/* 5. Envio de form: */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Digite o seu nome" value={name} onChange={handleName} />
        </div>
        {/* 2. Label envolvendo input: */}
        <label>
          <span>E-mail: </span>
          {/* 4. Simplificação de manipulação de state: */}
          <input type="email" name="email" placeholder='Digite o seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        {/* Textarea: */}
        <label>
          <span>Bio: </span>
          <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio} ></textarea>
        </label>
        {/* Select: */}
        <label>
          <span>Função no sistema:</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="administrador">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

