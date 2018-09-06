import React from 'react';
import { NavLink } from 'react-router-dom';

import SideMenu from '../../components/menu/SideMenu';

const NotesSideMenu = () =>
    <SideMenu>
        <li className="list-group-item">
            <NavLink to="/categories" activeClassName="active">
                <i className="fas fa-list"></i> Notes list
            </NavLink>
        </li>
        <li className="list-group-item">
            <NavLink to="/categories/new" activeClassName="active">
                <i className="far fa-plus-square"></i> Create new note
            </NavLink>
        </li>
    </SideMenu>
;

export default NotesSideMenu;