import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/shared/ErrorPage";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/shared/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'View_Recipe/:id',
            element: <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
            loader:({params}) => fetch(`https://food-recipe-server-ruby.vercel.app/chef/${params.id}`)
          },
          {
            path:'/blog',
            element:<Blog></Blog>
          },
          {
            path:'/contact',
            element:<Contact></Contact>
          },
          {
            path: '/terms',
            element:<Terms></Terms>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          }
        ]
      },
])

export default router;