// import { useState } from 'react'

import { HomeContainer, ContactContainer, ApiContainer, ProductContainer, ProtectContainer} from './containers'
import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicLayout from './containers/Layouts/PublicLayout';
import ProtectLayout from './containers/Layouts/ProtectLayout';
import CategoryLayout from './containers/Layouts/CategoryLayout';
// import CategoryContainer from './containers/CategoryContainer';
// import GetProfile from './containers/Categories/GetProfile'

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
          path:'/Login',
          element:<ContactContainer/>
        },
        // {
        //   path:'/Category', 
        //   element:<AboutContainer/>
        // },
        {
          path:'/ConnectApi', 
          element:<ApiContainer/>
        },
        {
          path:'/Product-specification', 
          element:<ProductContainer/>
        }

      ]
    },
    {
      path:'/*', 
      element:<h1>ERROR 404</h1>
    },
    {
      element: <CategoryLayout/>,
      children: [(
        {
          path: '/Category',
          element:<ProtectContainer/>
        }
      )]
    },
    {
      element: <ProtectLayout/>,
      children: [(
        {

          path:'/ConnectApi', 
          element:<ApiContainer/>
        }
      )]
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
