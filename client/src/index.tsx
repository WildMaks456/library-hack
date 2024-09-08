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
import CommunitiesMyPost from './components/CommunitiesMyPost';
import CommunitiesBooksSwap from './components/CommunitiesBooksSwap';
import CommunitiesFavorities from './components/CommunitiesFavorities';
import { Thread } from './components/Thread';
import CommunitiesMain from './components/CommunitiesMain';
import Library from './components/Library';
import Clubs from './components/Clubs';
import BookPages from './components/BookPages';
import PostDetail from './components/PostDetail';


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
		children: [
      { path: 'main', element: <CommunitiesMain /> },
      { path: 'books-swap', element: <CommunitiesBooksSwap /> },
      { path: 'favorities', element: <CommunitiesFavorities /> },
      { path: 'my-posts', element: <CommunitiesMyPost /> },
      { path: 'clubs', element: <Clubs /> },
			{ path: 'post/:id', element: <PostDetail /> },
    ],
		errorElement: <ErrorPage />,
  },
	{
    path: "/library",
    element: <Library />,
  },
	{
    path: "/quests",
    element: <BookPages />,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<RouterProvider router={router}/>
	</Provider>
);

