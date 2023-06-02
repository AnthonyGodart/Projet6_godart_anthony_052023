import styles from './about.module.css'
import Collapse from '../../components/Collapse'

const aboutCollapseInfos = [
  {
    id: 'reliable',
    title: 'Fiabilité',
    content:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
  },
  {
    id: 'respect',
    title: 'Respect',
    content:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    id: 'service',
    title: 'Service',
    content:'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
  },
  {
    id: 'security',
    title: 'Sécurité',
    content:'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
  }
]

function About() {
  return (
    <main>
      <div className={styles.landscape}>
      </div>
      <div className={styles.collapseArea}>
        { aboutCollapseInfos.map(data => {
            return (
            <Collapse title={data.title} key={data.id}>{data.content}</Collapse>
            )
          })
        }
      </div>
    </main>
  )
}
  
export default About
