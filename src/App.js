import './App.css';
import CardExampleCard from './components/card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [characters, setData] = useState(null);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {  
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setData(response.data.results);
      setLoading(false);
    });
  }, [])

  return (
    <div className="App">
      <div className='container'>
      {characters ? (
        <CardExampleCard info = {characters}/>
      )
      : (<div></div>)
    }
      </div>
    </div>
  );
}

export default App;
