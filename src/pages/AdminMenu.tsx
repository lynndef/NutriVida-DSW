export function AdminMenu () {

    return (
    <aside className="bg-[#FE770B] w-[444px] h-screen">
       <img src="imagens\nutrivida-logo-white.webp " alt="" className="ml-24 relative top-10" />
        <div className="text-2xl text-white font-primaryLight flex flex-col mt-16 gap-4 ml-20">
       <h1>Principal</h1>
       <div className="flex gap-4"><img src="imagens\paciente.planos.png" alt="" className="w-10 h-8" /><h1>Pacientes/<br/>Planos</h1></div>
       
       <div className="flex gap-4"><img src="imagens\inbox.png" alt="" className="w-10 h-8"/><h1>Inbox</h1></div>
       
       <h1>Performance</h1>
   
       
       <div className="flex gap-4"><img src="\imagens\pagamento.png" alt="" className=" relative top-[-90px] w-14 h-37"/><h1>Consultas & <br/>Pagamentos</h1></div>
        </div>
   
     </aside>)
   }