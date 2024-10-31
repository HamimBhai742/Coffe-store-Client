import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import AddCoffe from "./Components/AddCoffe.jsx";
import CoffeDetails from "./Components/CoffeDetails.jsx";
import Root from "./Components/Root.jsx";
import SingIn from "./Components/SingIn.jsx";
import SingUp from "./Components/SingUp.jsx";
import UpdateCoffe from "./Components/UpdateCoffe.jsx";
import User2 from "./Components/User2.jsx";
import Users from "./Components/Users.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch("https://coffe-store-server-cyan.vercel.app/addcoffe"),
      },
      {
        path: "/addcoffe",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "/addcoffe/:id",
        element: <CoffeDetails></CoffeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://coffe-store-server-cyan.vercel.app/addcoffe/${params.id}`
          ),
      },
      {
        path: "/updatecoffe/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({ params }) =>
          fetch(
            `https://coffe-store-server-cyan.vercel.app/addcoffe/${params.id}`
          ),
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "singin",
        element: <SingIn></SingIn>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch("https://coffe-store-server-cyan.vercel.app/user"),
      },
      {
        path: "/user2",
        element: <User2></User2>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
