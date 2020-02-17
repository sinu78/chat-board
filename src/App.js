import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import VisibleThreads from './containers/VisibleThreads'

function App() {
  return (
    <div className="App">
      <Header/>
      <VisibleThreads />
      <Footer/>
    </div>
  );
}

export default App;
