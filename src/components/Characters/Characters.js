import CardExampleCard from '../card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Routes, Route, Link } from 'react-router-dom'

function Characters() {
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
      <img src='https://occ-0-784-769.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABekGfcjcxKQH35sJxlr2te1JNYCwXqpovwMvTf4gzZ1ihzzUY0M8YcEijgvL_ClD5aIMWEY-hKIZVmgthEVssV7SthGRm2xVXkuwzpphv6u0.png?r=a66'></img>
      <div><Link to="/"><h1 className='tituloCard'>Volver a Home</h1></Link></div>
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

export default Characters;