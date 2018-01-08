import React, { Component } from 'react';
import Dog from './Dog';

const DOGS = [
  { id: 1, name: 'Jackie', breed: 'German Shepherd', description: 'Best dog ever', image: 'german-shepherd.jpg' },
  { id: 2, name: 'Joey', breed: 'Spaniel', description: 'So lovable', image: 'spaniel.jpg' },
  { id: 3, name: 'Ice', breed: 'Dobermann', description: 'Loves to exercise', image: 'dobermann.jpg' },
]

class DogList extends Component {
  render() {
    let dogs = DOGS;
    return (
      <div id="dog-list">
        {
            dogs.map((dog) => (
              <Dog
                key={dog.id}
                name={dog.name}
                breed={dog.breed}
                description={dog.description}
                image={dog.image}
              />
            ))
        }
      </div>
    );
  }
}
export default DogList;
