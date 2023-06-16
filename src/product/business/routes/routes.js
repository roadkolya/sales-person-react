import {urls} from "./urls";
import {Home} from "../../screens/home";
import {AssignedLeads} from "../../screens/assignedLeads";
import {withLayout} from "../hoc/withLayout";
import {CustomWrapper} from "../../components";

export const ASSIGNED_LEADS_ROUTE = {
    path: urls.assignedLeads,
    element: <CustomWrapper><AssignedLeads /></CustomWrapper>
}

export const HOME_ROUTE = {
    path: urls.home,
    element: withLayout(<Home />)
}

export const PUBLIC_ROUTES = [
    HOME_ROUTE,
    ASSIGNED_LEADS_ROUTE,
]

export const PRIVATE_ROUTES = [
]