export const Challenge = () => {
    
    const n1 = 2
    const n2 = 3
    console.log(`Ao clicar no botão de soma aparecerá o resultado da adição entre ${n1} e ${n2}.`)
    
    const handleSoma = () => {console.log(n1 + n2)}
    
    return (
        <div>
            <button onClick={handleSoma}>Botão de Soma!</button>
        </div>    
    )
    handleSoma()
}