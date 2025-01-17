import { createBrowserRouter } from "react-router-dom";

//pages
import { Home     } from "./pages/Home";
import { Admin    } from "./pages/Admin";
import { Login    } from "./pages/Login";
import { Networks } from "./pages/Networks";

export const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/admin',
            element:<Admin/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/network',
            element: <Networks/>
        }
    ]
)