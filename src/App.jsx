import {
  createBrowserRouter,
  RouterProvider,
  // eslint-disable-next-line no-unused-vars
  Route,
  Outlet,  // for 统一的父类样式
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  },
  {
    path: "/register",
    element: <div><Register /></div>,
  },
  {
    path: "/login",
    element: <div><Login /></div>,
  }
]);

const App = () => {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router} />
      </div>
    </div>);
};



export default App;