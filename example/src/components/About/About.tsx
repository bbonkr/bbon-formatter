import React from 'react';
import { Helmet } from 'react-helmet-async';

export const About = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>About - React Starter Kit</title>
            </Helmet>
            <div>
                <h1>About</h1>
                <p>React Starter Kit</p>
            </div>
        </React.Fragment>
    );
};
