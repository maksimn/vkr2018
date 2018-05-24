import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li className="active">
                    <Link to="/">Все</Link>
                </li>
                <li>
                    <Link to="/byPolygon">Полигон</Link>
                </li>
                <li>
                    <Link to="/nearest">Ближайшие</Link>
                </li>
                <li>
                    <Link to="/other">Другие</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavigationBar;