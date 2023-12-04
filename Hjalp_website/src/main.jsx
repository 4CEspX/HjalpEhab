import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  Link,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";

const Wrapper = () => (
  <>
    <Header />
    <SideBar />
  </>
);

const router = createBrowserRouter([
  {
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
