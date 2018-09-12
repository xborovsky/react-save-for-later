import React from 'react';
import { Redirect } from 'react-router';

const SecuredContent = ({authentication, children}) =>
    authentication ? children : <div><Redirect to="/login" /></div>
;

export default SecuredContent;