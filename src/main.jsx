import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import {Home , LandingPage , LoginForm , Signup} from './index'
import Layout from './components/Layout.jsx'
import {Contact} from './index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/main",
    element: <Layout/>,
    children : [
      {
        path :"/main/Home",
        element : <Home/>
      },
      {
        path :"/main/contact",
        element : <Contact />
      }
      
    ]
  },
  {
    path :"/Login",
    element : <LoginForm/>
  },
  {
    path :"/Signup",
    element : <Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >

<RouterProvider router={router} />
    </Provider>

)
