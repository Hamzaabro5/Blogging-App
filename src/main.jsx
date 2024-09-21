import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Profile from './Pages/Profile.jsx'



const router = createBrowserRouter([
    {
        path: ``,
        element: <Layout />,
        children: [
            {
                path: ``,
                element: <Home />
            },
            {
                path: `login`,
                element: <Login />
            },
            {
                path: `register`,
                element: <Register />
            },
            {
                path: `dashboard`,
                element: <Dashboard />
            },
            {
                path: `profile`,
                element: <Profile />
            },
            {
                path: `*`,
                element: `No Page Found`
            }

        ]
    }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
)
