import styles from './CarDetails.module.css'

export const CarDetails = ({brand, color, km}) => {

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Detalhes do carro:</h2>
        <p className={styles.paragraph}>Marca: {brand}</p>
        <p className={styles.paragraph}>Cor: {color}</p>
        <p className={styles.paragraph}>Quilometragem: {km}</p>
    </div>
  )
}
