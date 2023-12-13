import Layout from '../layout/base.jsx';
import Login from '../views/Login.jsx'
import Home from '../views/Home.jsx';
import {createBrowserRouter} from "react-router-dom"

const routes = createBrowserRouter([
  {
    path: "/",
    element: Login(),
  },
  {
    element: Layout(),
    children: [
      {
        path: "/home",
        element: Home(),
      }
    ]
  },
]);

export default routes