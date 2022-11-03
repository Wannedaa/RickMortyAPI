import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';
import Personaje from './components/personaje/Personaje';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Characters" element={<Characters />} />
        <Route path="/Characters/:id" element={<Personaje />} />
      </Routes>
    </div>
  );
}

export default App;
