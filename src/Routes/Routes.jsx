import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/Add-Toy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/My-Toys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToys from "../Pages/My-Toys/UpdateToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleToyDetails from "../Pages/AllToys/SingleToyDetails";
import SubCategory from "../Pages/SubCategory/SubCategory";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
          path:'/addToy',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'/allToy',
          element:<AllToys></AllToys>
        },
        {
          path:'/singleToyDetails/:id',
          element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/alltoys/${params.id}`)
        },
        {
          path:'/myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
          loader:()=>fetch(`http://localhost:5000/alltoys`)
        },
        {
          path:'/updateToys/:id',
          element:<UpdateToys></UpdateToys>,
          loader:({params})=>fetch(`http://localhost:5000/alltoys/${params.id}`)
        },
        {
          path:'/subCategory',
          element:<SubCategory></SubCategory>
        }

         
        
        
      ]
    },
  ]);
  

export default router;