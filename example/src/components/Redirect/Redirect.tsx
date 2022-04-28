import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RedirectProps {
    path: string;
    replace?: boolean;
}

export const Redirect = ({ path, replace }: RedirectProps) => {
    const location = useLocation();

    return <Navigate replace={replace} to={path} state={{ from: location }} />;
};
