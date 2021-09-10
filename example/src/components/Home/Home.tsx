import React from 'react';
import { Helmet } from 'react-helmet-async';
import Example from '../Example';
export const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <h1>Formatter</h1>
                <Example />
            </div>
        </React.Fragment>
    );
};
