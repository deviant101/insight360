import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsList from './components/NewsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      {/* Other components */}
    </div>
  );
}

export default App;