import { lazy, Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
// =======================================================================================

import BaseLayout from '../containers/_layout/base-layout'

import { CustomCircularProgress } from '../components'
const Project = lazy(() => import('../containers/projects'))
const NotFound = lazy(() => import('../containers/not-found'))
const About = lazy(() => import('../containers/about'))
const Home = lazy(() => import('../containers/home'))
const Resume = lazy(() => import('../containers/resume'))

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <BaseLayout />,
            children: [
                {
                    path: '/',
                    element: (
                        <Suspense fallback={<CustomCircularProgress />}>
                            <Home />
                        </Suspense>
                    ),
                },
                {
                    path: 'about',
                    element: (
                        <Suspense fallback={<CustomCircularProgress />}>
                            <About />
                        </Suspense>
                    ),
                },
                {
                    path: 'contact',
                    element: (
                        <Suspense fallback={<CustomCircularProgress />}>
                            <About />
                        </Suspense>
                    ),
                },
                {
                    path: 'projects',
                    element: (
                        <Suspense fallback={<CustomCircularProgress />}>
                            <Project />
                        </Suspense>
                    ),
                },
                {
                    path: 'resume',
                    element: (
                        <Suspense fallback={<CustomCircularProgress />}>
                            <Resume />
                        </Suspense>
                    ),
                },
                {
                    path: '/not-found',
                    element: (
                        <Suspense fallback={<CustomCircularProgress />}>
                            <NotFound />
                        </Suspense>
                    ),
                },

                {
                    path: '*',
                    element: <Navigate to="/not-found" replace />,
                },
            ],
        },
    ])
}
