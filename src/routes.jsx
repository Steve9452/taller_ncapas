import Layout from "./layout/Layout";
import DeveloperHub from "./pages/developerHub/DeveloperHub";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn"
import Error from "./components/Error";
const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <DeveloperHub />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
