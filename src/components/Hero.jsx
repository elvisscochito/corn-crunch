import logo from '../assets/Icon.svg';
import styles from '../styles/Hero.module.css';
const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* <link rel="stylesheet" href="../styles/Hero.css" precedence="default" /> */}
      <img src={logo} alt="Logo" />
      <p>Próximamente...¡Estamos trabajando en el desarrollo del sitio web oficial!</p>
      <p>&#40;conforme el emprendimiento avance&#47;crezca&#41;</p>
    </section>
  )
}

export default Hero;
