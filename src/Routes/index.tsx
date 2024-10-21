import { FunctionComponent, Suspense } from "react";
import ErrorBoundary from "../Components/ErrorBoundary";
import Loader from "../Components/UI/loader";
// import { BrowserRouter } from "react-router-dom";
import { Routes as BrowserRoutes, BrowserRouter, Route } from "react-router-dom";
import { BASE_ROUTES } from "../Constant/baseRoute";
import PrivateRoute from "./PrivateRoute";

const Routes:FunctionComponent<Record<string, never>> = () => {
    return(
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
               <BrowserRouter basename="/">
                    <BrowserRoutes>
                        {
                            BASE_ROUTES.map(({useAuth, path, Component, Layout}) => (
                                <Route
                                    path={path}
                                    key={path}
                                    element={
                                            Layout ? (
                                                <PrivateRoute>
                                                    <Layout>
                                                        <Component />
                                                    </Layout>
                                                </PrivateRoute>
                                        ) : (
                                        <Component />
                                    )
                                    }
                                />  
                            ))
                        }
                    </BrowserRoutes>
               </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    )
}

export default Routes