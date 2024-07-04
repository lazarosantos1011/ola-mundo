import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/foto_perfil_portfolio.png'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Meu nome é <strong>Lázaro</strong> e eu sou um desenvolvedor web.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt=""
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />

            </div>
        </div>
    )
}

export default Banner;