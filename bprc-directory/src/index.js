import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Search from './pages/Search';
import NewResource from './pages/NewResource';
// import { resource, setResource } from './pages/NewResource';

// code from React Router in order to change between pages of the project
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// identifying which pages to route between
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "search",
    element: <Search/>,
  },
  {
    path: "new-resource",
    element: <NewResource/>
    // resource={resource}
    // setResource={setResource}/>,
  },
]);

// rendering pages to be displayed
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
