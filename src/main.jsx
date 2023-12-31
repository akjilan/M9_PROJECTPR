import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/Error/ErrorPage.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Homepage from './components/Home/Homepage.jsx';
import FirstPage from './components/FirstPage/FirstPage.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetails from './components/FriendDetails/FriendDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>this is home page !</div>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path:"/about",
//     element:<About></About>

//   },
//   {
//     path:"/contact",
//     element:<Contact/>

//   }

// ]);

const router = createBrowserRouter([
  {
    path:'/',
    element:<Homepage></Homepage>,
    errorElement:<ErrorPage></ErrorPage>,
    children:
    [{
        path:'/',
        element:<FirstPage></FirstPage>
    },
      {
        path:'/about',
        element:<About></About>

      },
      {
        path:'/friends',
        element:<Friends></Friends>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'/friend/:friendId',
        element:<FriendDetails></FriendDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'/posts',
        element: <Posts></Posts> ,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'/post/:postId',
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'/contact',
        element:<Contact></Contact>

      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
