import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login';
import Browse from './components/Browse';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/browse',
    element: <Browse />
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
