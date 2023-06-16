import {Route, Routes} from "react-router-dom";
import React from "react";

export const PrivateRoutes = ({
                                 path,
                                 element
                             }) => {

    const isAuthenticated = true
    return (
        <Routes>
            <Route path={path} element={isAuthenticated ? element : <h1>User is not authenticated</h1>}/>
        </Routes>
    );
}