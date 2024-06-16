import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import { CssBaseline } from '@mui/material';
import PrivateRoute from './components/PrivateRoute.jsx'
import './App.css'
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute >
                <App/>
            </PrivateRoute>
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: "/app",
    element: <PrivateRoute >
              <App/>
            </PrivateRoute>

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
