import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
};

export default App;