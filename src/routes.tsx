import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import { AdminMenu } from "./pages/AdminMenu";
import { Inbox, ListaPlanos, Pacientes, Pagamentos } from "./components/Tabelas/AdminTables"; 

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
    element: <AdminMenu />,
    children: [
      { 
        path: "/AdminMenu/Pacientes&Planos", 
        element: <section className="flex gap-36 h-[0px]"><Pacientes/> <ListaPlanos/> </section>
      },
      { 
        path: "/AdminMenu/inbox", 
        element: <Inbox /> 
      },
      { 
        path: "/AdminMenu/consultas", 
        element: <Pagamentos/>
      },
    ],
  },
]);
