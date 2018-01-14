import React, { Component } from 'react';
import Dog from './Dog';
import { DOGS } from './App';
import PropTypes from 'prop-types';
import dogList from '../css/DogList.css'

const DogList = props => {
    return (
      <div className="dogList">
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
