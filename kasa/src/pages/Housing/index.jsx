import styles from './housing.module.css'
import HousingBanner from '../../components/HousingBanner'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import fetcher from '../../utils/fetcher'
import { useParams } from 'react-router-dom'
import Error404 from '../Error404'

const housingsData = await fetcher()
function Housing() {
  const {id} = useParams()
  const selectedHousing = housingsData.find((housingData) => housingData.id === id )
  if (!selectedHousing){
    return (<Error404 />)
  }
  else {
    const housingCollapseInfos = [
      { title: "Description", content: selectedHousing.description },
      { title: "Équipements", content: <ul>
        {selectedHousing.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
        ))}
      </ul>
    }];
    const rates = [1, 2, 3, 4 , 5]
    const tagList = selectedHousing.tags  
        return(
          <main key={selectedHousing.id}>
            <HousingBanner title={selectedHousing.title} imgSrc={selectedHousing.pictures} />
            <section className={styles.head}>
              <ul className={styles.leftList}>
                <li><h2>{selectedHousing.title}</h2></li>
                <li><h3>{selectedHousing.location}</h3></li>
                <li className={styles.tagList}>{tagList.map((tag, index)=> (
                <Tag key={index} tag={tag}/>))}
                </li>
              </ul>
              <ul className={styles.rightList}>
                <li><Host name={selectedHousing.host.name} picture={selectedHousing.host.picture}/></li>
                <li className={styles.rating}>{rates.map((e, index) => (
                <Rating key={index} color={parseInt(selectedHousing.rating) >= e ? styles.colored : styles.rating} />))}
                </li>
              </ul>
            </section>
            <section className={styles.collapseContainer}>
              {housingCollapseInfos.map((data, index) => (
                <Collapse title={data.title} key={index}>
                 {data.content}
               </Collapse>
              ))}
            </section>
          </main>
        )}
}

export default Housing