import React from 'react';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Clients from './components/clients/Clients';
function App() {
  return (
    <div>
     <NavBar />
     <Header />
     <Services />
     <Clients />
     </div>
  );
}

export default App;
