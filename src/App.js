import React from 'react'
import Head from './components/Head'
import './App.css';
import Features from './components/Features';
import Story from './components/Story';
import Cards from './components/Cards';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App">
      <Head/>
      <SideBar/>
      <Features/>
      <Story/>
      <Cards/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
