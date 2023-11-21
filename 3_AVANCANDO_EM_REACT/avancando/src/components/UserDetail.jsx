import { useState } from "react"

export const UserDetail = () => {
    const pessoas = [
        {nome: "Tiago", idade: 17, profissao: "estudante"},
        {nome: "Pedro", idade: 25, profissao: "vendedor"},
        {nome: "Paula", idade: 30, profissao: "médica"}
    ]
  return (
    <div>
        {pessoas.map((pessoa, index) => (
            <div key={index}>
                <p>{pessoa.nome}:</p>
                {pessoa.idade >= 18 ? (
                    <p>Pode tirar a carteira de habilitação!</p>
                ) : (
                    <p>Não pode tirar a carteira de habilitação!</p>
                )    
            } 
            </div>
        ))}
    </div>
  )
}

