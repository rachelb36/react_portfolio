import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe'; 
import ContactMe from './pages/ContactMe'; 
import Portfolio from './pages/Portfolio'; 
import ErrorPage from './pages/ErrorPage'; 
import './App.css';

// Create a BrowserRouter instance
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'aboutme',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <ContactMe />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);

// Render the app with RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
