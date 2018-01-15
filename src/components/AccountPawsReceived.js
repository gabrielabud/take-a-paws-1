import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PawReceived from './PawReceived';

const AccountPawsReceived = props => {
    return (
      <div className="accountpawsreceived">
        {
        props.pawsReceived.map(paw => (
          <div key={paw.id}>
            <PawReceived
              status={paw.status}
              userId={paw.userId}
            />
          </div>
        ))
       }
      </div>
    );
};
export default AccountPawsReceived;
