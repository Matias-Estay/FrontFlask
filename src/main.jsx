
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,} from "react-router-dom"
import './index.css'
import routes from './routes/router.jsx'
import axios from 'axios'


axios.defaults.baseURL = import.meta.env.VITE_API_URL


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
);
