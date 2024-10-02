import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [{
        path: "/",
        element: <Home />,
      }],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [{
        path: "/products",
      element: <Products />,

      }],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [{
        path: "/about",
      element: <About />,

      }],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [{
        path: "/contact",
      element: <Contact />,
      }],
    },
  ]);
  return <RouterProvider router={browserRouter} />;
}

export default App;
