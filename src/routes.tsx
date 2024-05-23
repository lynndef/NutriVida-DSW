import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import {  Pagamentos } from "./components/Tabelas/AdminTables"; 
import { AdminUI } from "./pages/AdminUI";
import { PacienteUI } from "./components/TabelasUI.tsx/PacientesUI";
import { InboxUI } from "./components/TabelasUI.tsx/InboxUI";

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
    path: "/AdminUI",
    element: <AdminUI/>,
  },
  {
    path: "/AdminMenu",
    element: <AdminUI />,
    children: [
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
        element: <Pagamentos/>
      },
    ],
  },
]);
