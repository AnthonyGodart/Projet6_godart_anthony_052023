import styles from './housingbanner.module.css'
import { useState } from 'react'

const leftArrow = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                </svg>;
const rightArrow = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                </svg>;

function HousingBanner(props){
    const [currentIndex, setCurrentIndex] = useState(0);
    function prevImage(){
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.imgSrc.length - 1 : prevIndex - 1));
    };
    function nextImage(){
        setCurrentIndex((nextIndex) => (nextIndex === props.imgSrc.length - 1 ? 0 : nextIndex + 1));
    };
    const showArrows = props.imgSrc.length > 1; // Vérifie s'il y a plus d'une photo

    return (
      <figure className={styles.banner}>
        <img src={props.imgSrc[currentIndex]} alt={"Carousel de " + props.title} />
        <figcaption>
          {showArrows && <span onClick={prevImage}>{leftArrow}</span>}
          {showArrows && <span onClick={nextImage}>{rightArrow}</span>}
        </figcaption>
        <span className={styles.counter}>{currentIndex + 1} / {props.imgSrc.length}</span>
      </figure>
    );
}
export default HousingBanner