import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// =======================================================================================
import About from "../containers/about/About";
import Project from "../containers/projects/project";
import NotFound from "../containers/not-found/not-found";
import BaseLayout from "../containers/_layout/base-layout";
import { CustomCircularProgress } from "../components";

const Home = lazy(() => import("../containers/home"))
const Resume = lazy(() => import("../containers/resume"))


export default function Router() {

    return useRoutes([{
        path: "/",
        element: (<BaseLayout />),
        children: [
            {
                path: '/',
                element: (<Suspense
                    fallback={<CustomCircularProgress />}
                >
                    <Home />
                </Suspense>)
            },
            {
                path: 'about',
                element: <About

                />
            },
            {
                path: 'contact',
                element: <About />
            },
            {
                path: 'projects',
                element: <Project />
            },
            {
                path: 'resume',
                element: <Suspense
                    fallback={<CustomCircularProgress />}

                ><Resume /></Suspense>
            },
            {
                path: '/not-found',
                element: <NotFound />
            },

            {
                path: '*',
                element: <Navigate to="/not-found" replace />
            },

        ]
    }]);
}
