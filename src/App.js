import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signup/Signin';
function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} exact path='/' />
        <Route element={<Signup/>} exact path='/Signup' />
        <Route element={<Signin/>} exact path='/Signin' />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;