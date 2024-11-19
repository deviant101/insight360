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
import SignUp from './components/SignUp';

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
          <Route path="/news/:category" element={<NewsPage count={8} />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Add more routes as needed */}
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;