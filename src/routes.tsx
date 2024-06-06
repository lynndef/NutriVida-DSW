import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { LandingPage } from './pages/LandingPage';
import { AdminUI } from './pages/AdminMenu';
import { PacienteUI } from './components/AdminPagesUI.tsx/PacientesUI';
import { InboxUI } from './components/AdminPagesUI.tsx/InboxUI';
import { ConsultasUI } from './components/AdminPagesUI.tsx/ConsultasUI';
import { AdminHomeUI } from './components/AdminPagesUI.tsx/HomeUI';
import ProtectedRoute from './contexts/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/AdminMenu",
    element: (
      <ProtectedRoute>
        <AdminUI />
      </ProtectedRoute>
    ),
    children: [
      { 
        path: "", 
        element: (
          <ProtectedRoute>
            <AdminHomeUI />
          </ProtectedRoute>
        ),
      },
      { 
        path: "/AdminMenu/Pacientes&Planos", 
        element: (
          <ProtectedRoute>
            <PacienteUI />
          </ProtectedRoute>
        ),
      },
      { 
        path: "/AdminMenu/inbox", 
        element: (
          <ProtectedRoute>
            <InboxUI />
          </ProtectedRoute>
        ),
      },
      { 
        path: "/AdminMenu/consultas", 
        element: (
          <ProtectedRoute>
            <ConsultasUI />
          </ProtectedRoute>
        ),
      }
    ],
  },
]);
