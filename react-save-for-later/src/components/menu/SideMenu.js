import React from 'react';

import './SideMenu.css';

const SideMenu = ({children}) =>
    <ul className="list-group side-menu">
        { children }
    </ul>
;

export default SideMenu;