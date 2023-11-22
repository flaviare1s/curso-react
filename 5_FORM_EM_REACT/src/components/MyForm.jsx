import './MyForm.css'

export const MyForm = () => {
  return (
    <div>
      {/* Criação de forms */}
      <form>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="name" placeholder="Digite o seu nome" />
        </div>
        {/* Label envolvendo input */}
        <label>
          <span>E-mail: </span>
          <input type="email" name="email" id="email" placeholder='Digite o seu email' />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

