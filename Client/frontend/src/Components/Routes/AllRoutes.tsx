import React from 'react';
import {useRoutes } from "react-router-dom";
import LandingPage from '../HomeScreen/LandingPage';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const AllRoutes = () => {

    let element = useRoutes([
        {
            path: "/",
            element: <SignUp />
        },
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "/homepage",
            element: <LandingPage />
        }
    ])
  return element
}

export default AllRoutes