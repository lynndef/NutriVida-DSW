import { Link, Outlet } from "react-router-dom";

export function AdminMenu () {

    return (
      <div className="flex">
    <aside className="bg-[#FE770B] w-[444px] h-screen">

       <img src="imagens\nutrivida-logo-white.webp " alt="" className="ml-24 relative top-10" />
        <div className="text-2xl text-white font-primaryLight flex flex-col mt-16 gap-4 ml-20">
       <h1>Principal</h1>
       <nav className="flex flex-col gap-y-6">
       <div className="flex gap-4"><img src="imagens\paciente.planos.png" alt="" className="w-10 h-8" /> 
       <Link to="/AdminMenu/Pacientes&Planos">Pacientes/<br/>Planos</Link></div>
     
       <div className="flex gap-4"><img src="imagens\inbox.png" alt="" className="w-10 h-8"/><Link to="/AdminMenu/inbox">Inbox</Link></div>
       
       <h1>Performance</h1>
       
       <div className="flex gap-4"><img src="\imagens\pagamento.png" alt="" className=" relative top-[-90px] w-14 h-37"/><Link to="/AdminMenu/pagamentos">Pagamentos</Link></div>
       </nav>
        </div>
      
     </aside>
     <div className="pt-48 max-w-8xl mx-auto">
     <Outlet/>
     </div>
     </div>
         
     )
   }