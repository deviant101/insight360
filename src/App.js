import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import './App.css';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <NewsList />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;