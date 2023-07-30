import { Route, Routes } from 'react-router-dom';
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ProtectedRoute from './components/shared/routes/ProtectedRoute';
import PublicRoute from './components/shared/routes/PublicRoute'
import Donar from './pages/auth/Dashboard/Donar';
import IndexPage from './pages/IndexPage';
import Hospitals from './pages/auth/Dashboard/Hospitals';
import Organisation from './pages/auth/Dashboard/Organisation';
import Consumer from './pages/auth/Dashboard/Consumer';
import Donation from './pages/auth/Donation';
import DonarList from './pages/admin/DonarList';
import HospitalList from './pages/admin/HospitalList';
import OrganisationList from './pages/admin/OrganisationList';
import AdminHome from './pages/admin/AdminHome';



export default function App() {
  return (

    <div>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>

              <IndexPage />

            </ProtectedRoute>
          }

        />

        <Route
          path="/donar-list"
          element={
            <ProtectedRoute>
              <DonarList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/organisation-list"
          element={
            <ProtectedRoute>
              <OrganisationList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donation"
          element={
            <ProtectedRoute>
              <Donation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoute>
              <Consumer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/organisation"
          element={
            <ProtectedRoute>
              <Organisation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

      </Routes>
    </div>

  )
}
