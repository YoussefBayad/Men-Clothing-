import React from 'react';
import Navbar from './components/header';
import './default.scss';
import Showcase from './components/showcase';
import More from './components/more';
function App() {
  return (
    <div className="container">
      <Navbar />
      <Showcase />
      <More />
    </div>
  );
}

export default App;
