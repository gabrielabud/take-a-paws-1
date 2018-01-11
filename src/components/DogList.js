import React, { Component } from 'react';
import Dog from './Dog';
import { DOGS } from '../App';
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
          </div>
        ))
       }
      </div>
    );
};

export default DogList;
