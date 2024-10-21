import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AUTH_PATHS } from "../../../Constant/path";

import Signup from "../pages/Signup";


const AuthRoute:FunctionComponent<Record<string, never>> = () => {
    return(
        <Routes>
            <Route path="/">
                <Route path="" element={<Navigate to="signin" replace /> } />
                <Route path={AUTH_PATHS.SIGNUP} element={< Signup/>} />
            </Route>
            <Route
                path="*"
                element={
                <div
                    style={{
                    width: "50%",
                    margin: "5em auto",
                    textAlign: "center",
                    }}
                >
                    <p>Oopppss, you seem to be lost</p>
                </div>
                }
            />
        </Routes>
    )
}

export default AuthRoute