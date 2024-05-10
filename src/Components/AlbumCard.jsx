import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../Components/redux/actions/favoritesActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function AlbumCard({ singleSong, onPlay }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(song => song.id === singleSong.id);
  const [liked, setLiked] = useState(isFavorite);

  const handleLikeClick = () => {
    setLiked(!liked);
    if (!liked) {
      dispatch(addToFavorites(singleSong));
    } else {
      dispatch(removeFromFavorites(singleSong.id));
    }
  };

 

  return (
    <div className="col text-center">
      <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
      <p className='text-white'>
        Track: "{singleSong.title}"<br />
        Artist:  {singleSong.artist.name}
      </p>
      <div>
        <button onClick={handleLikeClick} style={{ border: 'none', background: 'none', cursor: 'pointer', marginRight: '10px' }}>
          <FontAwesomeIcon icon={faHeart} style={{ color: liked ? 'red' : 'grey' }} />
        </button>
        
      </div>
    </div>
  );
}

export default AlbumCard;