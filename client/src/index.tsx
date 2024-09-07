import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import ErrorPage from './pages/error-page';
import store from './app/store';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';
import Communities from './components/Communities';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
		errorElement: <ErrorPage />,
  },
	{
    path: "/account",
    element: <Account />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
	{
    path: "/communities",
    element: <Communities />,
  },
	// {
  //   path: "contacts/:contactId",
  //   element: <App />,
  // },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<RouterProvider router={router}/>
	</Provider>
);

