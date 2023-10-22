import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/Error/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    children:[
      {
        path:"/about",
        element:<div>jilan</div>
  
      }
    ]
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
