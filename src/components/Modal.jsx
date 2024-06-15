import PropTypes from 'prop-types';

const Modal = ({ breed, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={breed.image} alt={breed.name} className="modal-image" />
        <h2>{breed.name}</h2>
        <p>Scientific Name: {breed.scientific_name}</p>
        <p>Size: {breed.size}</p>
        <p>Description: {breed.description}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  breed: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    scientific_name: PropTypes.string,
    size: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
