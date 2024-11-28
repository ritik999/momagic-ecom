import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layer from './Layer.tsx';
import Home from './pages/Home/Home.tsx';
import Listing from './pages/ProductListing/Listing.tsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.tsx';
import Login from './pages/Login/Login.tsx';
import Signup from './pages/Signup/Signup.tsx';
import { AuthContextProvider } from './context/AuthContext.tsx';
import Test from './pages/Test/Test.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path="/" element={<Test />}>
      <Route path="/" element={<Home />} />
      <Route path='/items' element={<Listing />} />
      <Route path='/details' element={<ProductDetail imgUrl='https://crowncricketer.com/wp-content/uploads/2024/04/crtbthm.jpg' />} />
    </Route>
  </>
  )
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
)
