import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../Components/redux/actions/favoritesActions';
import AlbumCard from './AlbumCard';

function FavoritesPage() {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (songId) => {
    dispatch(removeFromFavorites(songId));
  };

  return (
    <div>
      <h2>I tuoi preferiti</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {favorites.map(song => (
          <div className="col mb-4" key={song.id}>
            <AlbumCard 
              singleSong={song} 
              isFavorite={true}
              onRemoveFromFavorites={handleRemoveFromFavorites}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;