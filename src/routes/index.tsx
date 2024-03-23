import { Navigate, useRoutes } from "react-router-dom";
import Home from "../containers/home/Home";
import About from "../containers/about/About";
import Portfolio from "../containers/portfolio/Portfolio";
import ProjectNotLive from "../containers/portfolio/projectNotLivePage";
import BaseLayout from "../containers/BaseLayout";
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
                path: 'projects',
                element: <Portfolio />
            },
            {
                path: '/project-not-live',
                element: <ProjectNotLive />
            },
            {
                path: '*',
                element: <Navigate to="/project-not-live" replace />
            },

        ]
    }]);
}