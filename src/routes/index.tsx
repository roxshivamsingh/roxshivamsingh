import { Navigate, useRoutes } from "react-router-dom";
import Home from "../containers/home/Home";
import About from "../containers/about/About";
import Project from "../containers/projects/project";
import BaseLayout from "../containers/_layout/base-layout";
import NotFound from "../containers/not-found/not-found";
export default function Router() {

    return useRoutes([{
        path: "/",
        element: (<BaseLayout />),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
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