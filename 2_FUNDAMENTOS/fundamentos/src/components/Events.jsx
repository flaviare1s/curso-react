export const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Clicou!')}>Clique aqui também!</button>
                <button onClick={() => {
                    if(true) {
                        console.log('Isso não deveria existir!')
                    }
                }}>Clica aqui por favor!</button>
            </div>
        </div>
    )
}