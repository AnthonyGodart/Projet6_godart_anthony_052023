import styles from './housing.module.css'
import HousingBanner from '../../components/HousingBanner'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

function Housing(props) {
  return (
    <main>
      <HousingBanner title={"Mon titre "+props.title} imgSrc="{props.imgSrc}"/>
      <section className={styles.head}>
        <ul className={styles.leftList}>
            <li><h2>{"Titre de la location " + props.title}</h2></li>
            <li><h3>{"Emplacement de la location " + props.location}</h3></li>
            <li><Tag /></li>
        </ul>
        <ul className={styles.rightList}>
          <li><Host /></li>
          <li><Rating /></li>
        </ul>
      </section>
      <section className={styles.collapseContainer}>
        <Collapse title="Description">{"Ici ma description en dynamique " + props.description}</Collapse>
        <Collapse title="Équipements">{"Ici ma description en dynamique " + props.equipment}</Collapse>
      </section>
    </main>
  )
}


export default Housing