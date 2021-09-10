import React from 'react';
import { Location } from 'history';
import { Link, useLocation } from 'react-router-dom';

interface LocationState {
    from: Location;
}

export const PageNotFound = () => {
    const {
        state: { from },
    } = useLocation<LocationState>();

    return (
        <div>
            <h1>404 | Page not found</h1>
            <p>
                <code>{from.pathname}</code> does not exist.
            </p>
            <p>
                <Link to="/">Go to Home</Link>
            </p>
        </div>
    );
};
