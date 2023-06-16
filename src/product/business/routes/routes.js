import {urls} from "./urls";
import {AssignedLeads, Campaigns, Home, Templates} from "../../screens";
import {CustomWrapper} from "../../components";

export const TEMPLATES_ROUTE = {
    path: urls.templates,
    element: <CustomWrapper><Templates /></CustomWrapper>
}

export const CAMPAIGNS_ROUTE = {
    path: urls.campaigns,
    element: <CustomWrapper><Campaigns /></CustomWrapper>
}

export const ASSIGNED_LEADS_ROUTE = {
    path: urls.assignedLeads,
    element: <CustomWrapper><AssignedLeads /></CustomWrapper>
}

export const HOME_ROUTE = {
    path: urls.home,
    element: <CustomWrapper><Home /></CustomWrapper>
}

export const PUBLIC_ROUTES = [
    HOME_ROUTE,
    ASSIGNED_LEADS_ROUTE,
    CAMPAIGNS_ROUTE,
    TEMPLATES_ROUTE,
]

export const PRIVATE_ROUTES = [
]