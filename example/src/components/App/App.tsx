import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AsyncComponent, LoadingComponent } from '../AsyncComponent';

const Header = AsyncComponent(() => import('../Header'), {
    resolveComponent: (props) => props.Header,
    fallback: <LoadingComponent />,
});

const Home = AsyncComponent(() => import('../Home'), {
    resolveComponent: (props) => props.Home,
    fallback: <LoadingComponent />,
});

const About = AsyncComponent(() => import('../About'), {
    resolveComponent: (props) => props.About,
    fallback: <LoadingComponent />,
});

const PageNotFound = AsyncComponent(() => import('../PageNotFound'), {
    resolveComponent: (props) => props.PageNotFound,
    fallback: <LoadingComponent />,
});

const Redirect = AsyncComponent(() => import('../Redirect'), {
    resolveComponent: (props) => props.Redirect,
    fallback: <LoadingComponent />,
});

const helmetContext = {};

export const App = () => {
    return (
        <HelmetProvider context={helmetContext}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/404" element={<PageNotFound />} />

                    <Route
                        path="*"
                        element={<Redirect path="/404" replace />}
                    />
                </Routes>
            </Router>
        </HelmetProvider>
    );
};
