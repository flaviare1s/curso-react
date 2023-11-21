

export const CarDetails = ({brand color km}) => {

  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <p>Marca: {brand}</p>
        <p>Cor: {color}</p>
        <p>Quilometragem: {km}</p>
    </div>
  )
}
