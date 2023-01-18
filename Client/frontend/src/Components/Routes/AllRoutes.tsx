import React from 'react';
import {useRoutes } from "react-router-dom";
import MyDay from '../Body/MyDay';
import Tasks from '../Body/Tasks';
import DailyTasks from '../MyBody/DailyTasks';
import Myassigned from '../MyBody/Myassigned';
import MyImportant from '../MyBody/MyImportant';
import MyPlanned from '../MyBody/MyPlanned';
import MyTasks from '../MyBody/MyTasks';
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
            path: "/tasks",

            children: [
                {
                    index: true,
                    element: <MyDay />
                },
                {
                    path: "/tasks/myday",
                    element: <MyDay />
                },
                {
                    path: "/tasks/important",
                    element: <MyImportant />
                },
                {
                    path: "/tasks/planned",
                    element: <MyPlanned />
                },
                {
                    path: "/tasks/assigned",
                    element: <Myassigned />
                },
                {
                    path: "/tasks/inbox",
                    element: <Tasks />
                }
            ]
        }
    ])
  return element
}

export default AllRoutes