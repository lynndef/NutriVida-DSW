import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import { AdminUI } from "./pages/AdminMenu";
import { PacienteUI } from "./components/AdminPagesUI.tsx/PacientesUI";
import { InboxUI } from "./components/AdminPagesUI.tsx/InboxUI";
import { ConsultasUI } from "./components/AdminPagesUI.tsx/ConsultasUI";
import { AdminHomeUI } from "./components/AdminPagesUI.tsx/HomeUI";

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
    element: <AdminUI />,
    children: [
      { 
        path: "", 
        element:  <AdminHomeUI/> 
      },
      { 
        path: "/AdminMenu/Pacientes&Planos", 
        element:  <PacienteUI/> 
      },
      { 
        path: "/AdminMenu/inbox", 
        element: <InboxUI /> 
      },
      { 
        path: "/AdminMenu/consultas", 
        element: <ConsultasUI/>
      }
    ],
  },
]);
