import React from 'react'
import Login from './Components/Login/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import NotExists from './Components/NotExists/NotExists.jsx'

export default function App() {

  const routing = createBrowserRouter([
    {
      path: '/', element: <Layout/>, children: [
        { index: true, element: <ProtectedRoute><Home/></ProtectedRoute> },
        { path: '/login', element: <Login /> },
        { path: '*', element: <NotExists /> }
      ]
    }
  ])


  return <>
    <RouterProvider router={routing}></RouterProvider>
  </>
}
