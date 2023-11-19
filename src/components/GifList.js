import React from 'react';

function GifList({ gifs }) {
  return (
    <ul className="gif-list">
      {gifs.map((gif) => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
