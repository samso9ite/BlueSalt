import DashboardLayout from "@/Layout"
import DashboardRoute from "../Modules/Dashboard/routes"
import { BASE_PATHS } from "./path"



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
    }
]