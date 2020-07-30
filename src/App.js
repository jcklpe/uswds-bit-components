import React from 'react';
import './App.scss';

import { Alert } from "@trussworks/react-uswds";
// import { Link } from 'react-router-dom'
import {

  NavMenuButton,

} from '@trussworks/react-uswds'


function App() {

  const toggleMobileNav = console.log('click!!!');

  return (
    <div className="App">
      <header className="App-header">

        <Alert type="error" heading="this is an alert" >
          BINGO!
        </Alert>

        <NavMenuButton
              label="Menu"
              onClick={toggleMobileNav}
              className="usa-menu-btn"
        />
      </header>
      </div>
      )
    }

export default App;
