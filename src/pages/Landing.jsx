import Hero from '../components/Hero.jsx'
import styles from '../styles/Landing.module.css'

function Landing() {
  return (
    <div className={styles.Landing}>
      {/* <meta name='keywords' content='Corn Crunch' />
      <meta name='description' content='Sitio web oficial de Corn Crunch' /> */}
      {/* <link rel="stylesheet" href="./styles/App.css" precedence="default" /> */}
      <Hero />
    </div>
  )
}

export default Landing
