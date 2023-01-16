import React from 'react';
import {useRoutes } from "react-router-dom";
import AssignedToMe from '../Body/AssignedToMe';
import Important from '../Body/Important';
import MyDay from '../Body/MyDay';
import Planned from '../Body/Planned';
import Tasks from '../Body/Tasks';
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
            path: "/task",
          
            children : [
                {
                    index : true,
                    element : <MyDay />
                },
                {
                    path : "/task/inbox",
                    element : <Tasks />
                },
                {
                    path : "/task/assigned_to_me",
                    element : <AssignedToMe />
                },
                {
                    path : "/task/planned",
                    element : <Planned />
                },
                {
                    path : "/task/myday",
                    element : <MyDay />
                },
                {
                    path : "/task/important",
                    element : <Important />
                },
            ]

            
        }
    ])
  return element
}

export default AllRoutes