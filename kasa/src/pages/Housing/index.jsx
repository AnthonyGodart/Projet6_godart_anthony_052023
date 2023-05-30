import styles from './housing.module.css'
import HousingBanner from '../../components/HousingBanner'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import fetcher from '../../utils/fetcher'

const housingsData = await fetcher()

function Housing() {
  return(
    housingsData.map(housingData => {
        return(
          <main key={housingData.id}><HousingBanner title={housingData.title} imgSrc={housingData.pictures} /><section className={styles.head}>
            <ul className={styles.leftList}>
              <li><h2>{housingData.title}</h2></li>
              <li><h3>{housingData.location}</h3></li>
              <li><Tag /></li>
            </ul>
            <ul className={styles.rightList}>
              <li><Host name={housingData.host.name} picture={housingData.host.picture}/></li>
              <li><Rating index={housingData.rating}/></li>
            </ul>
          </section><section className={styles.collapseContainer}>
              <Collapse title="Description">{housingData.description}</Collapse>
              <Collapse title="Équipements">{housingData.equipments}</Collapse>
            </section></main>
        )}
  ))
}

export default Housing