import React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = () =>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Save for later</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" activeClassName="active">Tasks</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/notes" className="nav-link" activeClassName="active">Notes</NavLink>
                </li>
                {/*<li className="nav-item active">
                    <a className="nav-link" href="#">Tasks</a>
                </li>*/}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        title="Settings">
                        <i className="fas fa-cogs"></i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink to="/categories" className="dropdown-item">Manage categories</NavLink>
                        {/*<a className="dropdown-item" href="#">Manage categories</a>*/}
                    </div>
                </li>
            </ul>
        </div>
    </nav>
;

export default MainMenu;