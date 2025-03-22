import { FunctionComponent } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Overview from "../pages/Overview"

const DashboardRoute:FunctionComponent<Record<string,never>> = () => {
    return(
        <Routes>
            <Route path="/">
                <Route path="" element={<Navigate to="/dashboard" replace /> } />
                <Route path="/dashboard" element={<Overview />}  />
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
    )}

export default DashboardRoute