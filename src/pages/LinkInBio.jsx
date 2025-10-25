import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, /* faGlobe, */ faLink, faLocationDot, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/LinkInBio.module.css';

function LinkInBio() {
  return (
    <div className={styles.LinkInBio}>
      {/* <header>
        <img src={Logo} alt="Logo" />
      </header> */}
      <div className={styles.content}>
        <a href="https://maps.app.goo.gl/JL2X5Pvik2p5dm3b9" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />&nbsp;Ubicación
        </a>
        <a href="https://forms.gle/ahWSMCeZo9DzAVcx7" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFile} className={styles.icon} />&nbsp;Encuesta
        </a>
        <a href="https://www.ubereats.com/store/corn-crunch-cuernavaca/rDzFFLTDQ1C_5HSHSqgPBA?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkNvcm4lMjBDcnVuY2glMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKWXhxakNRRFp6WVVSOWRFRjdqUXl2TU0lMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMTguODI4NjgyOSUyQyUyMmxvbmdpdHVkZSUyMiUzQS05OS4yMjc5MTI2JTdE&utm_source=menu-maker" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMotorcycle} className={styles.icon} />&nbsp;Uber Eats Store
        </a>
        <a href="https://www.instagram.com/corncrunch.mx/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />&nbsp;&#64;corncrunch.mx
        </a>
        <a href="https://www.facebook.com/corncrunch.mx" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />&nbsp;&#47;Corn Crunch
        </a>
        <a href="https://wa.me/527771068816?text=Hola,%20quiero%20hacer%20un%20pedido" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />&nbsp;777 106 8816
        </a>
        <a href="https://corncrunch.com">
          <FontAwesomeIcon icon={faLink} className={styles.icon} />&nbsp;corncrunch.com
        </a>
        <a href="mailto:contact@corncrunch.com">
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />&nbsp;contact@corncrunch.com
        </a>
      </div>
      <footer>
        <p>© 2025 Corn Crunch. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default LinkInBio;
