import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <nav id="header">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/hello-world">Does not exist page</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a
                        href="https://www.npmjs.com/package/@bbon/formatter"
                        target="_blank"
                        rel="noreferrer"
                    >
                        NPM
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/bbonkr/bbon-formatter"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </li>
            </ul>
        </nav>
    );
};
