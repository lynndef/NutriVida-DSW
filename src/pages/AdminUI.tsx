import { User, Inbox, CalendarCheck2  } from 'lucide-react';
import { Link, Outlet } from "react-router-dom";

export function AdminUI(){
    return(
        <>
        <section className="flex bg-black">
            <aside className="bg-black w-[80px] h-screen border-[#27272A] border-[1px]">
            <div className="flex flex-col items-center gap-4 mt-4">
            <img src="/imagens/nutrivida-logo-white.webp" alt="" className="w-12"/>
            <Link to="/AdminMenu/Pacientes&Planos"> <User color="white" size={32} /> </Link>
            <Link to="/AdminMenu/inbox"><Inbox color="white" size={32} /></Link>
            <Link to="/AdminMenu/consultas"> <CalendarCheck2 color="white" size={32} /></Link>
            </div>
            </aside>
            <Outlet />
             
            </section>
        </>
    )
}