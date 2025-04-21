import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import Savol from './components/Savol';
import Goyalar from './components/Goyalar';
import HuquqiyHujjatlar from './components/HuquqiyHujjatlar';
import Analitika from './components/Analitika';
import Hamjamiyat from './components/Hamjamiyat';
import VizDastur from './components/VizDastur';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/savol" element={<Savol />} />
          <Route path="/goyalar" element={<Goyalar />} />
          <Route path="/huquqiy-hujjatlar" element={<HuquqiyHujjatlar />} />
          <Route path="/analitika" element={<Analitika />} />
          <Route path="/hamjamiyat" element={<Hamjamiyat />} />
          <Route path="/viz-dastur" element={<VizDastur />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
