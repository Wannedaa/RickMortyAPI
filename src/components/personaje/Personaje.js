import React from "react";
import "../../App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CardExampleCard from "../card/Card";
import { Routes, Route, Link } from 'react-router-dom'


document.body.className = 'App';
function Personaje() {
  const id = useParams();

  const [characters, setData] = useState();
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setData(response.data.results);
      setLoading(false);
    });
  }, []);

  var name
  var status
  var species
  var origin
  var gender
  var img
  var location

  {characters ? ( 
    characters.forEach((element) => {

      if (element.id == id.id) {
        console.log(element)
        name = element.name
        gender = element.gender
        status = element.status
        species = element.species
        origin = element.origin.name
        img = element.image
        location = element.location.name
      }}
      )
      ) : (<div></div>)}
  
  return (
    <div className="App">
      <h1>{name}</h1>
      <img src={img} className="imgPersonaje"></img>
      <p>Status: {status}</p>
      <p>Origin: {origin}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Location: {location}</p>
      <Link to="/Characters"><h1 className='tituloCard'>Volver</h1></Link>
    </div>
  );
}

export default Personaje;

