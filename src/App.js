import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Rotas React!</h1>
        <Link to="/outra-rotas">Rotas</Link>

        <Routes>
          <Route path="/outra-rotas" element={<h2>Nova page Outras Rotas</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
