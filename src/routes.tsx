import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import { AdminMenu } from "./pages/AdminMenu";
import { Tabela } from "./components/Tabela";

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
        { path: "/AdminMenu/Pacientes&Planos", element: <Tabela table1="Paciente Nome" table2="Paciente ID" table3="Objetivo" table4="Email"/> },
        { path: "/AdminMenu/inbox", element: <Tabela table1="Paciente Nome" table2="Paciente ID" table3="Consulta Dia" table4="Consulta Hora" table5="Pagamento"/> },
        { path: "/AdminMenu/pagamentos", element: <Tabela table1="Nome" table2="Email" table3="Mensagem"/> },
      ],
    },
  ]);