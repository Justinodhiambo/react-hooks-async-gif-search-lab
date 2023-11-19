// GifListContainer.js
import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      fetchGifs(searchTerm);
    }
  }, [searchTerm]);

  const fetchGifs = async (query) => {
    const apiKey = 'KRunsdh1TSKZL0ZQORmTwcKJ3M6RsAYn';  
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setGifs(data.data.slice(0, 3)); 
    } catch (error) {
      console.error('Error fetching gifs:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div className="gif-list-container">
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
