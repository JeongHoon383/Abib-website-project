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
import Order from "./Pages/Order/Order";
import MyPageMain from "./Pages/MyPage/MyPageMain";
import OrderList from "./Pages/MyPage/OrderList";
import Inquiry from "./Pages/MyPage/Inquiry";
import MemberInfo from "./Pages/MyPage/MemberInfo";
import PrivateInquiry from "./Pages/MyPage/PrivateInquiry";
import Login from "./Pages/Login/Login";
import SignupMain from "./Components/Signup/SignupMain";
import SignupComplete from "./Components/Signup/SignupComplete";
import SignupSchema from "./Components/Signup/SignupSchema";
import store from "./Modules/rootReducer";
import persistor from "./Modules/rootReducer";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Members from "./Components/Admins/Members.jsx";
import Shipping from "./Components/Admins/Shipping.jsx";
import GlobalModal from "./Components/GlobalModal.jsx";
import Products from "./Components/Admins/Products.jsx";
import DashboardView from "./Components/Admins/DashboardView.jsx";
import { CookiesProvider } from "react-cookie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>not found</div>,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "product",
        children: [
          {
            path: "list/:category",
            element: <ProductList />,
          },
          {
            path: "detail/:pid",
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "search/:query",
        element: <SearchResult />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "signup",
        element: <Signup />,
        children: [
          {
            index: true,
            element: <SignupMain />,
          },
          {
            path: "join",
            element: <SignupSchema />,
          },
          {
            path: "complete",
            element: <SignupComplete />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "dashboardview",
        element: <DashboardView />,
      },

      {
        path: "/shipping",
        element: <Shipping />,
      },
      {
        path: "products",
        element: <Products />,
      },

      {
        path: "members",
        element: <Members />,
      },

      {
        path: "mypage",
        element: <MyPageMain />,
      },
      {
        path: "inquiry",
        element: <Inquiry />,
      },
      {
        path: "memberinfo",
        element: <MemberInfo />,
      },
      {
        path: "orderlist/:id",
        element: <OrderList />,
      },
      {
        path: "privateinquiry",
        element: <PrivateInquiry />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CookiesProvider>
          <PersistGate loading={null} persistor={persistor} />
          <GlobalModal />
          <RouterProvider router={router} />
        </CookiesProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
