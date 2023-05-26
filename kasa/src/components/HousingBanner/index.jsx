import styles from './housingbanner.module.css'

const leftArrow = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
                </svg>;
const rightArrow = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
                    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                </svg>;

function nextImage(){
    console.log('On va bien à l\'image suivante')
}
function prevImage(){
    console.log('On va bien à l\'image précédente')
}

function HousingBanner(props){
    return(
        <figure className={styles.banner}>
            <img src="{props.imgSrc}" alt={"Photo de "+props.title} />
            <figcaption>
                <span onClick={prevImage}>{leftArrow}</span>
                <span onClick={nextImage}>{rightArrow}</span>
            </figcaption>
        </figure>
    )
}
export default HousingBanner