import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
import Cart from "./Pages/Cart/Cart";
import SearchResult from "./Pages/Search/SearchResult";
import ProductList from "./Pages/Product/ProductList";
import ProductDetail from "./Pages/Product/ProductDetail";
import Signup from "./Pages/Signup/Signup";
import Admin from "./Pages/Admin/Admin";
import MypageMain from "./Pages/MyPage/MyPageMain";
import SignupMain from "./Components/Signup/SignupMain.jsx";
import SignupForm from "./Components/Signup/SignupSignForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>not found</div>,
    children: [
      {
        index: "/",
        element: <Main />,
      },
      {
        path: "/product",
        children: [
          {
            path: "/product/list/",
            element: <ProductList />,
          },
          {
            path: "/product/detail/:pid",
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "/search",
        element: <SearchResult />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <Signup />,
        children: [
          {
            path: "/signup/",
            element: <SignupMain />,
          },
          {
            path: "/signup/join",
            element: <SignupForm />,
          },
        ],
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/mypage",
        element: <MypageMain />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
