import logo from '../assets/Icon.svg';
import styles from '../styles/Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* <link rel="stylesheet" href="../styles/Hero.css" precedence="default" /> */}
      <img src={logo} alt="Logo" />
      <p>¡Estamos trabajando en el desarrollo del sitio web oficial!</p>
    </section>
  )
}

export default Hero;
