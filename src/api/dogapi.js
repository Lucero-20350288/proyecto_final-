// src/api/dogapi.js

const API_URL = 'https://api.thedogapi.com/v1';

export const fetchDogFacts = async () => {
  const response = await fetch(`${API_URL}/breeds`);
  const data = await response.json();
  return data.map(breed => ({
    name: breed.name,
    temperament: breed.temperament,
    life_span: breed.life_span,
    weight: breed.weight.imperial,
    height: breed.height.imperial,
    description: breed.bred_for,
  }));
};

export const fetchDogImage = async (breed_id) => {
  const response = await fetch(`${API_URL}/images/search?breed_id=${breed_id}`);
  const data = await response.json();
  return data[0].url;
};

export const fetchBreedInfo = async (query) => {
  const response = await fetch(`${API_URL}/breeds/search?q=${query}`);
  const data = await response.json();
  if (data.length === 0) return null;
  const breed = data[0];
  return {
    name: breed.name,
    temperament: breed.temperament,
    life_span: breed.life_span,
    weight: breed.weight.imperial,
    height: breed.height.imperial,
    description: breed.bred_for,
    id: breed.id,
  };
};
