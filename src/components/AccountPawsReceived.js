import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PawReceived from './PawReceived';

const AccountPawsReceived = props => {
    return (
      <div>
        <h3 className="minusTop">Paws Received</h3>
        <div className="accountPaws accountPawsReceived">
          {
          props.pawsReceived.map(paw => (
            <div key={paw.id}>
              <PawReceived
                id = {paw.id}
                statusPaw = {paw.status}
                userId = {paw.userId}
                dogId = {paw.dogId}
              />
            </div>
          ))
         }
        </div>
      </div>
    );
};
export default AccountPawsReceived;
