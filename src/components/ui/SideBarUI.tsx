import { ChevronLast, ChevronFirst, User, Inbox, CalendarCheck2, LogOut, CircleDollarSign } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm gap-0">
        <div className="p-4 pb-2 flex justify-center items-center">
          <Link to="/AdminMenu">
            <img
              src="/imagens/nutrivida-logo.webp"
              className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
              alt="Nutrivida Logo"
            />
          </Link>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }} >
          <ul className="flex-1 px-3">
            <SidebarItem icon={<User />} text="Pacientes&Planos" link="/AdminMenu/Pacientes&Planos"/>
            <SidebarItem icon={<Inbox />} text="Inbox" link="/AdminMenu/inbox" />
            <SidebarItem icon={<CircleDollarSign />} text="Consultas" link="/AdminMenu/consultas" />
          </ul>
        </SidebarContext.Provider>

        <div className="flex p-3 pl-6 ">
          <Link to="/">
            <LogOut color="red" size={32} />
          </Link>
        </div>
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text, link }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <li className="relative">
      <Link
        to={link}
        className={`
          flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
          transition-colors group
          ${expanded ? "text-black hover:bg-indigo-50" : "text-black"}
        `}
      >
        <div className="flex items-center relative">
          <div
            className={`p-2 rounded-full transition-all ${isActive ? "bg-black text-white" : "bg-transparent"}`}
          >
            {icon}
          </div>
          <span
            className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
          >
            {text}
          </span>
        </div>
        {!expanded && (
          <div
            className={`
              absolute left-full rounded-md px-2 py-1 ml-6 bg-black text-white text-sm
              invisible opacity-0 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
            {text}
          </div>
        )}
      </Link>
    </li>
  );
}
