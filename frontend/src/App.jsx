import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './layouts/components/Footer';
import "./App.css"
import ContactPage from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<Home />)
  },
  {
    path: '/home',
    element: (<Home />)
  },
  {
    path: '/login',
    element: (<LoginPage />)
  },
  {
    path: '/signUp',
    element: (<SignUpPage />)
  },
  {
    path: '/services',
    element: (<ServicesPage />)
  },
  {
    path: '/contact',
    element: (<ContactPage />)
  }
])

export default function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  )
}