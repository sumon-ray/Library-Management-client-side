import { createBrowserRouter } from "react-router-dom";
import CategoryBookDetails from "../Components/Category-Card/CategoryBookDetails";
import Main from "../Main/Main";
import AddBook from "../Pages/AddBook/AddBook";
import AllBooks from "../Pages/AllBooks/AllBooks";
import Update from "../Pages/AllBooks/Update";
import BorrowedBooks from "../Pages/BorrowedBooks/BorrowedBooks";
import Error404 from "../Pages/Error404/Error404";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Error404 />,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "/add-book",
        element: <AddBook />,
      },
      {
        path: "/all-book",
        element: <AllBooks />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(
            `https://server-pi-amber.vercel.app/singleData/${params.id}`
          ).then((res) => res.json()),
      },

      {
        path: "/borrowed-book",
        element: <BorrowedBooks />,
      },

      {
        path: "/details/:id",
        element: <CategoryBookDetails />,
        loader: ({ params }) =>
          fetch(
            `https://server-pi-amber.vercel.app/singleData/${params.id}`
          ).then((res) => res.json()),
      },
    ],
  },
]);

export default router;
