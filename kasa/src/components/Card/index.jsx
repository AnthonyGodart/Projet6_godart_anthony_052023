import PropTypes from 'prop-types'

function Card({ id, title, cover }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{id}</span>
            <img src={cover} alt="card cover" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}
 
Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}
 
export default Card