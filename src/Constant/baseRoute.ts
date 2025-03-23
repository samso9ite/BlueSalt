import DashboardLayout from "@/Layout"
import DashboardRoute from "../Modules/Dashboard/routes"
import { BASE_PATHS } from "./path"
import TrafficSystemRoute from "@/Modules/TrafficLight/route"



type Props = {
    path: string,
    Layout: React.FunctionComponent <any> | null,
    Component: React.FunctionComponent<Record<string, never>>,
    useAuth: boolean
}

export const BASE_ROUTES: Props[] = [
    {
        path: `${BASE_PATHS.APP}/*`,
        Component: DashboardRoute,
        Layout: DashboardLayout,
        useAuth: false
    },
    {
        path: `${BASE_PATHS.TRAFFICSYSTEM}/*`,
        Component: TrafficSystemRoute,
        Layout: null,
        useAuth: false
    },
    
]