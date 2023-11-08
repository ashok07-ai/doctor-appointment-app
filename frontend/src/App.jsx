import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import ServicesPage from './pages/ServicesPage';
import "./App.css"
import ContactPage from './pages/ContactPage';
import DoctorsPage from './pages/doctor/DoctorsPage';
import DoctorDetailPage from './pages/doctor/DoctorDetailPage';

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
    path: '/register',
    element: (<SignUpPage />)
  },
  {
    path: '/services',
    element: (<ServicesPage />)
  },
  {
    path: '/contact',
    element: (<ContactPage />)
  },
  {
    path: '/doctors',
    element: (<DoctorsPage />)
  },
  {
    path: '/doctor-details',
    element: (<DoctorDetailPage />)
  }
])

export default function App() {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  )
}