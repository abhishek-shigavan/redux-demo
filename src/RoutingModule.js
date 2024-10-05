import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Home from "./components/NotesContainer";
import Profile from "./components/ArchiveContainer";
import Dashboard from "./components/Dashboard";
import NotesContainer from "./components/NotesContainer";
import ArchiveContainer from "./components/ArchiveContainer";

export default function RoutingModule() {
    const appRoutes = createBrowserRouter([
        {
            path: "",
            element: <Dashboard/>,
            children: [
                {
                    path: "notes",
                    element: <NotesContainer/>
                },
                {
                    path: "archive",
                    element: <ArchiveContainer/>
                }
            ]
        },
        
    ])

    return(
        <RouterProvider router={appRoutes}/>
    )
}