import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MusicSection from '../src/Components/Music';
import Player from '../src/Components/Player';
import Navbar from './Components/Navbar';
import MainLinks from './Components/MainLinks';
import FavoritesPage from './Components/FavoritesPage';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from './Components/redux/actions/favoritesActions';


const MadonnaSection = () => <MusicSection artistName="madonna" />;
const QueenSection = () => <MusicSection artistName="queen" />;
const KatyPerrySection = () => <MusicSection artistName="katyperry" />;
const EminemSection = () => <MusicSection artistName="eminem" />;

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites')) || [];

    favoritesFromStorage.forEach(song => {
      dispatch(addToFavorites(song));
    });
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-12 col-md-9 offset-md-3 mainPage">
          <div className="row">
            <Navbar />
          </div>
          <div className="row">
            <div className="col-10">
              <MainLinks />
              <Routes>

                <Route path="/" element={
                  <>
 
                    <MadonnaSection />
                    <QueenSection />
                    <KatyPerrySection />
                    <EminemSection />
                  </>
                } />
      
                <Route path="/madonna" element={<MadonnaSection />} />
                <Route path="/queen" element={<QueenSection />} />
                <Route path="/katyperry" element={<KatyPerrySection />} />
                <Route path="/eminem" element={<EminemSection />} />
                
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
      <Player />
    </div>
  );
}

export default App;