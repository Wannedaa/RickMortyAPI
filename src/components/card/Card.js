import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './Card.css'


function CardExampleCard(props){
    return(
      <>
        {props.info.map((character, index) => (
          <div className='cardito' key={index}>
            <Card>
            <Image src={character.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{character.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{character.episode.length}</span>
              </Card.Meta>
              <Card.Description>
                {character.species}
              </Card.Description>
            </Card.Content>
          </Card>
          </div>
        ))}
    </>
    )
}

export default CardExampleCard