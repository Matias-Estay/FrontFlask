import Base from '../layout/base.jsx';
import Login from '../views/Login.jsx'
import HomeChile from '../views/HomeChile.jsx';
import {createBrowserRouter} from "react-router-dom"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    element: <Base/>,
    children: [
      {
        path: "/homechile",
        element: <HomeChile/>,
      }
    ]
  },
]);

export default routes