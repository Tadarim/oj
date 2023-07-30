import React from "react";
import { Navigate } from "react-router-dom";
import PasswordReset from "../views/password-reset";
import SolutionInfo from "../views/problems/c-cpns/solution/c-cpns/solution-info";

const Home = React.lazy(() => import('../views/home'))
const Problemset = React.lazy(() => import('../views/problemset'))
const Problems = React.lazy(() => import('../views/problems'))
const ProblemsetMain = React.lazy(() => import('../views/problemset/c-cpns/problemset-main'))
const ProblemMain = React.lazy(() => import("../views/problems/c-cpns/problem-cotainer/c-cpns/problems-mid/c-cpns/problem-main"))
const Submission = React.lazy(() => import("../views/problems/c-cpns/submission"))
const Comments = React.lazy(() => import("../views/problems/c-cpns/comments"))
const Solution = React.lazy(() => import("../views/problems/c-cpns/solution"))
const Circle = React.lazy(() => import('../views/circle'))
const Discuss = React.lazy(() => import('../views/circle/c-cpns/discuss'))
const Search = React.lazy(() => import('../views/search'))

const routes = [
    {
        path: '/',
        element: <Navigate to={"/home"}></Navigate>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
    {
        path: '/password/reset',
        element: <PasswordReset></PasswordReset>
    },
    {
        path: '/problemset',
        element: <Navigate to={"all"}></Navigate>
    },
    {
        path: '/problemset',
        element: <Problemset></Problemset>,
        children: [
            {
                path: 'all',
                element: <ProblemsetMain></ProblemsetMain>
            },
            {
                path: 'algorithms',
                element: <ProblemsetMain></ProblemsetMain>
            },
            {
                path: 'database',
                element: <ProblemsetMain></ProblemsetMain>
            },
            {
                path: 'javascript',
                element: <ProblemsetMain></ProblemsetMain>
            },
            {
                path: 'shell',
                element: <ProblemsetMain></ProblemsetMain>
            },
            {
                path: 'concurrency',
                element: <ProblemsetMain></ProblemsetMain>
            },
        ]
    },
    {
        path: '/problems',
        element: <Navigate to={"/problemset"}></Navigate>
    },
    {
        path: '/problems/:pid',
        element: <Navigate to={'description'}></Navigate>
    },
    {
        path: '/problems/:pid',
        element: <Problems></Problems>,
        children: [
            {
                path: 'description',
                element: <ProblemMain></ProblemMain>
            },
            {
                path: 'comments',
                element: <Comments></Comments>
            },
            {
                path: 'solution',
                element: <Solution></Solution>
            },
            {
                path: 'solution/:sid',
                element: <SolutionInfo></SolutionInfo>
            },
            {
                path: 'submissions',
                element: <Submission></Submission>
            },
        ]
    },
    {
        path: '/circle',
        element: <Circle></Circle>
    },
    {
        path: '/circle/discuss/:did',
        element: <Discuss></Discuss>
    },
    {
        path: '/search',
        element: <Search></Search>
    }
]

export default routes