import React, { Component } from 'react';
import Dog from './Dog';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const DOGS = [
  { id: 1, name: 'Jackie', breed: 'German Shepherd', description: 'Best dog ever', image: 'german-shepherd.jpg' },
  { id: 2, name: 'Joey', breed: 'Spaniel', description: 'So lovable', image: 'spaniel.jpg' },
  { id: 3, name: 'Ice', breed: 'Dobermann', description: 'Loves to exercise', image: 'dobermann.jpg' },
]

class DogList extends Component {

  render() {
    let dogs = DOGS;
    return (

      <Router>
      <div id="dog-list">
        {
            dogs.map(dog => (
              <Dog
                key={dog.id}
                name={dog.name}
                breed={dog.breed}
                description={dog.description}
                image= {dog.image}
              />,
              <Link to={`/dog/${dog.id}`}>click</Link>
            ))
        }
      </div>
      <div>
      <Route path="/dog/:dogId" component={Doggy} />
      </div>
      </Router>
    );
  }
}
const Doggy = ({ match }) => (
  <div>
  {match.params.dogId}
  </div>
)
export default DogList;
