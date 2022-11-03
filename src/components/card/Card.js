import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Card.css'
import "../../App.css";


function CardExampleCard(props){
    return(
      <>
        {props.info.map((character, index) => (
          <div className='cardito' key={index}>
            <Card>
            <Image src={character.image} wrapped ui={false} />
            <Card.Content>
              <Link to={"/characters/"+character.id}>
              <Card.Header><h1 className='tituloCard'>{character.name}</h1></Card.Header>
              </Link>
              <Card>{character.status}</Card>
              <Card.Meta>
                <span className='date'>Episodes :{character.episode.length}</span>
              </Card.Meta>
              <Card.Description>
                {character.species}
              </Card.Description>
              <Card.Description>
                id: {character.id}
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
        ))}
    </>
    )
}

export default CardExampleCard