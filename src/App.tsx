import './App.css'
import Wrapper from './components/Wrapper'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './pages/MainLayout'
import ProductPageID from './pages/Product/[id]';

function App() {
 


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Wrapper label='Oops! this page does not exist.'/>,
      children:[
        
      ]
    },
    {
      path:'/product/:id',
      element:<ProductPageID/>,
      errorElement:<Wrapper label='Oops! this page does not exist.'/>,
     
    }
  ]);

  return (
 <>
   <RouterProvider router={router} />
 </>
  )
}

export default App
