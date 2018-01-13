import React, { Component } from 'react';
import Dog from './Dog';
import Dogs from './App';
import Paw from './Paw';
import PropTypes from 'prop-types';

const DogList = props => {
    return (
      <div id="dog-list">
        {
        props.dogsapi.map(dog => (
          <div key={dog.id}>
            <Dog
            to={"/dog/" + dog.id}
            name={dog.name}
            breed={dog.breed}
            description={dog.description}
            image= {dog.image}
            />
            <Paw/>
          </div>
        ))
       }
      </div>
    );
};
export default DogList;
