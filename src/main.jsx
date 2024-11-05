import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from './context/CartProvider'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <HelmetProvider>
        <RouterProvider router={routes}></RouterProvider>
        <ToastContainer position="top-center"></ToastContainer>
      </HelmetProvider>
    </CartProvider>
  </StrictMode>
)
