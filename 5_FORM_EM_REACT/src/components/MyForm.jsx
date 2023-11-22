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
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

