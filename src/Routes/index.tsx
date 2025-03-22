import { FunctionComponent, Suspense } from "react";
import ErrorBoundary from "@/ErrorBoundary";
import Loader from "@/components/Interface/loader"
import { Routes as BrowserRoutes, BrowserRouter, Route } from "react-router-dom";
import { BASE_ROUTES } from "../Constant/baseRoute";

const Routes:FunctionComponent<Record<string, never>> = () => {
    return(
        <ErrorBoundary>
            <Suspense fallback={<Loader />}>
               <BrowserRouter basename="/">
                    <BrowserRoutes>
                        {
                            BASE_ROUTES.map(({path, Component, Layout}) => (
                                <Route
                                    path={path}
                                    key={path}
                                    element={
                                            Layout ? (
                                                // <PrivateRoute>
                                                    <Layout>
                                                        <Component />
                                                    </Layout>
                                                // </PrivateRoute>
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