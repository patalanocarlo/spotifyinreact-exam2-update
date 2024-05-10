import React, { useEffect, useState } from 'react';
import AlbumCard from './AlbumCard';

async function fillMusicSection(artistName) {
  try {
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artistName
    );
    if (response.ok) {
      let { data } = await response.json();
      return data.slice(0, 4);
    } else {
      throw new Error('Error in fetching songs');
    }
  } catch (err) {
    console.log('error', err);
    return [];
  }
}

function MusicSection({ artistName }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fillMusicSection(artistName)
      .then((data) => setSongs(data))
      .catch((error) => console.error('Error:', error));
  }, [artistName]);

  return (
    <div>
      <h2>{artistName}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
        {songs.map((song, index) => (
          <AlbumCard key={index} singleSong={song} />
        ))}
      </div>
    </div>
  );
}

export default MusicSection;