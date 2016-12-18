/**
 * Created by PANCAK3 on 12/17/2016.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router';

const Navigation = () => {
        return (
            <nav className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer App</li>
                        <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
                        <li><Link to="/" activeClassName="active-link">Countdown</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="https://github.com/jpancake" target="_blank">Justin Razon</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
};

export default Navigation;