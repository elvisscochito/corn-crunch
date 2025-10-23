import logo from '../assets/Icon.svg';
import styles from '../styles/Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* <link rel="stylesheet" href="../styles/Hero.css" precedence="default" /> */}
      <img src={logo} alt="Logo" />
      <p>¡Estamos trabajando en el desarrollo del sitio web oficial!</p>
      <p>&#40;conforme el negocio avanza&#47;crece&#41;</p>
    </section>
  )
}

export default Hero;
