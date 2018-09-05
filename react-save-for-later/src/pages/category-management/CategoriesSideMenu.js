import React from 'react';
import { NavLink } from 'react-router-dom';

import SideMenu from '../../components/menu/SideMenu';

const CategoriesSideMenu = () =>
    <SideMenu>
        <li className="list-group-item">
            <NavLink to="/categories" activeClassName="active">
                <i class="fas fa-list"></i> Categories list
            </NavLink>
        </li>
        <li className="list-group-item">
            <NavLink to="/categories/new" activeClassName="active">
                <i className="far fa-plus-square"></i> Create new category
            </NavLink>
        </li>
    </SideMenu>
;

export default CategoriesSideMenu;