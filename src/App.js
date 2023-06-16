import store from "./product/business/redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "./product/business/routes/routes";
import {Provider} from "react-redux";

export const App = () => {

    const router = createBrowserRouter([...PUBLIC_ROUTES, ...PRIVATE_ROUTES]);
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
}
