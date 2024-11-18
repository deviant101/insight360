import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import './App.css';
import NewsList from './components/NewsList';
import VideoGallery from './components/VideoGallery';
import NewsPage from './components/NewsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={
            <>
              <MainSection />
              <NewsList category="General" count={8} />
              <VideoGallery />
              <NewsList category="Technology" count={4} />
              <NewsList category="Science" count={4} />
            </>
          } />
          <Route path="/news/technology" element={<NewsPage category="Technology" />} />
          <Route path="/news/science" element={<NewsPage category="Science" />} />
          <Route path="/news/health" element={<NewsPage category="Health" />} />
          {/* Add more routes as needed */}
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;