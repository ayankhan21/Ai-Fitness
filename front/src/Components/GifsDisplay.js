import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GifDisplay({message}) {
  const [searchTerms, setSearchTerms] = useState([]);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    searchGifs();
  }, []);

  const searchGifs = async () => {
    const apiKey = 'LIVDSRZULELA';
    const limit = 3;

    try {
      const requests = searchTerms.map(async (term) => {
        const response = await axios.get(
          `https://g.tenor.com/v1/search?q=${encodeURIComponent(
            term.trim()
          )}&key=${apiKey}&limit=${limit}`
        );
        const data = response.data;
        const gifResults = data.results || [];
        return gifResults;
      });

      const gifResponses = await Promise.all(requests);
      const allGifs = gifResponses.flat();
      setGifs(allGifs);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearch = () => {
    if (searchTerms.length > 0) {
      searchGifs();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerms.join(', ')}
        onChange={(e) => setSearchTerms(e.target.value.split(','))}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {gifs.map((gif, index) => (
          <div key={index}>
            <img src={gif.media[0].nanogif.url} alt={gif.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GifDisplay;
