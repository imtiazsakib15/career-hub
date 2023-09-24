import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import JobDetails from "./components/JobDetails";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:jobTitle/:jobId",
        loader: () => fetch(`jobs.json`),
        element: <JobDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
