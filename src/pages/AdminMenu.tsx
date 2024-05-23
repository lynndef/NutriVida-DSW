import { Link, Outlet } from "react-router-dom";
import { SelecionarAcao } from "../components/Escolhas/SelecionarAcao";

export function AdminMenu () {

    return (
      <section className="flex bg-white">
      <div className="flex bg-white">
       <aside className="bg-black w-[444px] h-screen  ">

       <img src="\imagens\nutrivida-logo-white.webp " alt="" className="mx-auto relative top-10 w-40" />
        <div className="pt-10 text-base text-white font-primaryLight flex flex-col mt-16 gap-4 ml-20">
       <h1 className="font-primarySemiBold">Principal</h1>
       <nav className="flex flex-col gap-y-6">
       <div className="flex gap-4"><img src="\imagens\paciente.planos.png" alt="" className="w-10 h-8" /> 
       <Link to="/AdminMenu/Pacientes&Planos">Pacientes/<br/>Planos</Link></div>
     
       <div className="flex gap-4"><img src="\imagens\inbox.png" alt="" className="w-10 h-8"/><Link to="/AdminMenu/inbox">Inbox</Link></div>
       
       <h1 className="font-primarySemiBold">Performance</h1>
       
       <div className="flex gap-4"><img src="\imagens\pagamento.png" alt="" className=" relative top-[-90px] w-14 h-37"/><Link to="/AdminMenu/consultas">Consultas & <br />Pagamentos</Link></div>
       </nav>
        </div>
      
         </aside>
         
        <div className="flex-col mx-auto">
        <input type="text" placeholder="Search.." className="bg-[url(/imagens/search.webp)] bg-no-repeat bg-[center_left_1rem] bg-[length:30px_30px] text-white bg-black w-[1050px] h-[48px] ml-[90px] mt-20 rounded-xl pl-[60px]"/>
        
        <div className="flex pt-28 justify-center">
        <SelecionarAcao/>
        <Outlet />
        
        </div>
        </div>
        </div>
        </section>
         
     )
   }