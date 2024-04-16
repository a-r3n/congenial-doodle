import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
