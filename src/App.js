import React from 'react';
import Navbar from './components/header';
import './default.scss';
import Showcase from './components/showcase';
function App() {
  return (
    <div className="container">
      <Navbar />
      <Showcase />
    </div>
  );
}

export default App;
