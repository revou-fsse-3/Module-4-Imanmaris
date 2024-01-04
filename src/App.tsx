// import { useState } from 'react'

import { HomeContainer, AboutContainer, ContactContainer, ProductContainer } from './containers'
import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from './containers/Layouts/PublicLayout';

function App() {

  const router = createBrowserRouter([
    {
      element: <PublicLayout/>,
      children: [
        {
          path:'/',
          element:<HomeContainer/>
        },
        {
          path:'/About',
          element:<AboutContainer/>
        },
        {
          path:'/Contact', 
          element:<ContactContainer/>
        },
        {
          path:'/Product-specification/:id', 
          element:<ProductContainer/>
        }

      ]
    },
    {
      path:'/*', 
      element:<h1>ERROR 404</h1>
    }
  ])

  return (
    <div className="flex flex-wrap flex-col items-center justify-center">
      <RouterProvider router={router}/>
      
      {/* <BrowserRouter>
        <Routes>

          <Route element={<PublicLayout/>}>
            <Route path='/' element={<HomeContainer/>}/>
            <Route path='/About' element={<AboutContainer/>}/>
            <Route path='/Contact' element={<ContactContainer/>}/>
          </Route>

          <Route path='*' element={<h1>ERROR 404</h1>}/>
        </Routes>
      </BrowserRouter> */}
    </div>


    // <>
    //   <div className="flex flex-wrap flex-col items-center justify-center">

    //   <HomeContainer />
    //   </div>
    // </>

  )
}

export default App
