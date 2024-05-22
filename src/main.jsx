import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren ,Route,RouterProvider, Routes} from 'react-router-dom'
import {Education,About,Home,ErrorPage,Contact,Skill,Work} from './pages/index.js'

const router = createBrowserRouter(
  createRoutesFromChildren(
        <Route path='' Component={App}>
           <Route path='/' Component={Home} errorElement={ErrorPage}></Route>
           <Route path='/about' Component={About} errorElement={ErrorPage}></Route>
           <Route path='/education' Component={Education} errorElement={ErrorPage}></Route>
           <Route path='/contact' Component={Contact} errorElement={ErrorPage}></Route>
           <Route path='/skill' Component={Skill} errorElement={ErrorPage}></Route>
           <Route path='/work' Component={Work} errorElement={ErrorPage}></Route>
        </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
       <App />
    </RouterProvider>
  </React.StrictMode>,
)
