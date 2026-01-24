import { createBrowserRouter, RouterProvider } from "react-router";
import {
  Layout,
  Home,
  Profile,
  Collection,
  Saved,
  Setting,
  Bid,
} from "./pages";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "collection",
        element: <Collection />,
      },
      {
        path: "bids",
        element: <Bid />,
      },
      {
        path: "saved",
        element: <Saved />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
];
const router = createBrowserRouter(routes);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
