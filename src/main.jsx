import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from './components/Layout.jsx'
import Welcome from './components/Welcome.jsx'
import Category from "./components/Category.jsx"
import Ques from './components/Ques.jsx'
import QuizContextProvider from './contexts/QuizContextProvider.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Welcome/>
      },
      {
        path:"/category",
        element:<Category/>
      },
      {
        path:"/questions",
        element:<Ques/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizContextProvider>
    <RouterProvider router={router}/>

    </QuizContextProvider>
  </StrictMode>,
)
