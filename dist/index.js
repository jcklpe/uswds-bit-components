import React from 'react';

import { Alert } from "@trussworks/react-uswds";
import '@trussworks/react-uswds/lib/index.css';
import './test.scss';


const AlertWrapper = (): React.ReactElement => (
    <Alert type="success" heading="this is an alert" >
    BINGO!
    </Alert>



  )

export default AlertWrapper;
