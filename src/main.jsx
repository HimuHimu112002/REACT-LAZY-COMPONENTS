import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
const LazyAbout = React.lazy(()=> import('./pages/About.jsx'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about",
    element:<LazyAbout/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
