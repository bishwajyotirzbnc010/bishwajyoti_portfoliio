import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Blog from './components/Blog.jsx'
// import { createBrowserRouter, RouterProvider } from "react-router";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App />,
//   },
//   {
//     path:"/blog",
//     element:<Blog />
//   }
// ]);
createRoot(document.getElementById('root')).render(
<>{/* <RouterProvider router={router} /> */}
<App /></>
);
