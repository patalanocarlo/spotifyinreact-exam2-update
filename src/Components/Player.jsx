import React, { useState } from 'react';
import logo1 from "../Images/shuffle.png"
import logo2 from "../Images/prev.png"
import logo3 from "../Images/play.png"
import logo4 from "../Images/next.png"
import logo5 from "../Images/repeat.png"
import AlbumCard from './AlbumCard'; 

function Player({ currentSong }) {
  const [selectedSong,] = useState(null); 
  


  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#a">
                  <img src={logo1} alt="shuffle" />
                </a>
                <a href="#a">
                  <img src={logo2} alt="prev" />
                </a>
                <a href="#a">
                  <img src={logo3} alt="play" />
                </a>
                <a href="#a">
                  <img src={logo4} alt="next" />
                </a>
                <a href="#a">
                  <img src={logo5} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      {selectedSong && ( 
        <div className="row justify-content-end align-items-center">
          <div className="col-6 text-right">
            <AlbumCard singleSong={selectedSong} /> 
          </div>
        </div>
      )}
    </div>
  );
}

export default Player;