import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import RootLayout from "./components/RootLayout";
import Solbalance from "./Pages/Solbalance";
import Ethbalance from "./Pages/Ethbalance";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>, 
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "solbalance",
          element: <Solbalance/>,
        },
        {
          path: "ethbalance",
          element: <Ethbalance/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
