import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import './App.css';
import NewsList from './components/NewsList';
import VideoGallery from './components/VideoGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <NewsList category="Technology" count={4} />
      <NewsList category="Science" count={4} />
      <VideoGallery />
      <NewsList category="Health" count={4} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;