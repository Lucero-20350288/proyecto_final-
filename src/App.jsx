import { useState, useEffect } from 'react';
import './assets/css/index.css';
import DogCard from './components/DogCard';
import Search from './components/Search';
import Modal from './components/Modal';

const API_URL = 'https://api.thedogapi.com/v1/breeds';

function App() {
  const [breeds, setBreeds] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [randomBreeds, setRandomBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBreeds(data);
        getRandomBreeds(data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const getRandomBreeds = (breeds) => {
    const shuffled = breeds.sort(() => 0.5 - Math.random());
    setRandomBreeds(shuffled.slice(0, 3));
  };

  const handleSearch = (query) => {
    const results = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const openModal = (breed) => {
    setSelectedBreed({
      ...breed,
      scientific_name: "Canis lupus familiaris",  // Este es un valor de ejemplo, podrías obtener información real si está disponible
      size: breed.height ? `${breed.height.metric} cm` : "No data",
      description: breed.temperament || "No description available",
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedBreed(null);
    setShowModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog Facts</h1>
      </header>
      <Search onSearch={handleSearch} />
      <div className="breed-list">
        {searchResults.length > 0 ? (
          searchResults.map((breed) => (
            <DogCard key={breed.id} fact={breed} openModal={() => openModal(breed)} />
          ))
        ) : (
          randomBreeds.map((breed) => (
            <DogCard key={breed.id} fact={breed} openModal={() => openModal(breed)} />
          ))
        )}
      </div>
      {showModal && selectedBreed && (
        <Modal breed={selectedBreed} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
