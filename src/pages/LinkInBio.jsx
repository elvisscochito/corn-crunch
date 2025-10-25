import Logo from '../assets/Logo.svg';
import styles from '../styles/LinkInBio.module.css';

function LinkInBio() {
  return (
    <div className={styles.LinkInBio}>
      <header>
        <img src={Logo} alt="Logo" />
      </header>
      <footer>
        <p>© 2025 Corn Crunch. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default LinkInBio;
