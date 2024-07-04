import styles from './rodape.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            <p>Desenvolvido por Lázaro Rocha</p>
        </footer>
    )
}

export default Rodape;