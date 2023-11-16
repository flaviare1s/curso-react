export const TemplateExpressions = () => {
    
    const name = 'João'
    const data = {
        age: 31,
        job: 'médico',
    }
    
    return (
        <div>
            <h1>Olá, {name}, tudo bem?</h1>
            <p>Você atua como {data.job}.</p>
            <p>Sua idade é {data.age}.</p>
            <p>{console.log('Testando...')}</p>
        </div>
    )
}