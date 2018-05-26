import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavigationBar = (props) => {
    const {pathname} = props.location;
    
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className={ pathname === '/' ? 'active' : ''}>
                        <Link to="/">Все</Link>
                    </li>
                    <li className={ pathname === '/byPolygon' ? 'active' : ''}>
                        <Link to="/byPolygon">Полигон</Link>
                    </li>
                    <li className={ pathname === '/nearest' ? 'active' : ''}>
                        <Link to="/nearest">Ближайшие</Link>
                    </li>
                    <li className={ pathname === '/other' ? 'active' : ''}>
                        <Link to="/other">Другие</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

const NavigationBarWithRouter = withRouter(props => <NavigationBar {...props}/>);

export default NavigationBarWithRouter;