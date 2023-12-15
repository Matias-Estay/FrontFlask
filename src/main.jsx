
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,} from "react-router-dom"
import './index.css'
import routes from './routes/router.jsx'
import axios from 'axios'
require('dotenv').config()
axios.defaults.baseURL = process.env.API_URL
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
);
