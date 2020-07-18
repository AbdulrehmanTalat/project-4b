import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Clients from './components/clients/Clients';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div>
     <NavBar />
     <Header />
     <Services />
     <Clients />
     <br/>
     <Footer />
     </div>
  );
}

export default App;
