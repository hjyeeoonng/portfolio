import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './pages/main';
import AboutPage from './pages/AboutPage';
import DailyPage from './pages/DailyPage';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/daily",
    element: <DailyPage />,
  }
]);

root.render(
  <RouterProvider router={router} />
);
