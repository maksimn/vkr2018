import React from 'react';

const NavigationBar = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li className="active">
                    <a href="/">Все</a>
                </li>
                <li>
                    <a href="#">Полигон</a>
                </li>
                <li>
                    <a href="#">Ближайшие</a>
                </li>
                <li>
                    <a href="#">Другие</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default NavigationBar;