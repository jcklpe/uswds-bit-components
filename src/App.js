import React from 'react';
import './App.css';
import '@trussworks/react-uswds/lib/uswds.css';
import '@trussworks/react-uswds/lib/index.css';


import { NavMenuButton } from '@trussworks/react-uswds';
import  AlertWrapper  from './components/alert';


function App() {

  const toggleMobileNav = console.log('click!!!');

  return (
    <div className="App">
      <header className="App-header">

<AlertWrapper></AlertWrapper>

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
