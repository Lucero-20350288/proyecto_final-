import PropTypes from 'prop-types';

const DogCard = ({ fact, openModal }) => {
  return (
    <div className="dog-card" onClick={openModal}>
      <img
        src={fact.image || 'fallback-image-url.jpg'}
        alt={fact.name}
        className="dog-image"
      />
      <p>{fact.name}</p>
    </div>
  );
};

DogCard.propTypes = {
  fact: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default DogCard;
