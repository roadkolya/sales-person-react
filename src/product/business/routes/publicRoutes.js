import {Route, Routes} from "react-router-dom";
import React from "react";
import {withLayout} from "../hoc/withLayout";
import {Home} from "../../screens/home";

export const PublicRoutes = ({
                                 path,
                                 element
                             }) => {

    const isAuthenticated = true

    const modifiedComponent = withLayout(element)

    return (
        <Routes>
            <Route path={path} element={isAuthenticated ? modifiedComponent : <h1>User is not authenticated</h1>}/>
        </Routes>
    );
}