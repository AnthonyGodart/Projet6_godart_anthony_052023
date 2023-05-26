import Gallery from '../../components/Gallery'
import styles from './home.module.css'

function Home() {
  return (
    <main>
      <section className={styles.landscape}>
        <h2>Chez vous, partout et ailleurs</h2>
      </section>
      <Gallery />
    </main>      
  )
}

export default Home