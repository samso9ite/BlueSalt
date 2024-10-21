import { BASE_PATHS } from "./path"
import AuthRoute from "../Modules/Auth/routes"


type Props = {
    path: string,
    Layout: React.FunctionComponent <any> | null,
    Component: React.FunctionComponent<Record<string, never>>,
    useAuth: boolean
}

export const BASE_ROUTES: Props[] = [
    {
        path: `${BASE_PATHS.AUTH}/*`,
        Component: AuthRoute,
        Layout: null,
        useAuth: false
    }
]