import { Link } from "react-router-dom";
import { SelecionarAcao } from "../Modal-Escolhas/SelecionarAcao";
import { Pacientes, ListaPlanos } from "../ChamadasAPI/AllRequests"
import { PacientePorID } from "../ChamadasAPI/PacientePorID";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area"
import { RefreshButton } from "../ui/RefreshButton";

export function PacienteUI(){
    return(
        <div className="w-screen flex bg-[white] justify-center font-Geist-Sans">   
        <div className="flex flex-col mt-8 gap-4">
        <h1 className="text-black ml-14">
            <Link to="/AdminMenu">Admin-Menu</Link> &nbsp; &gt; <span className="text-gray-600"> &nbsp; Pacientes</span> </h1>
        <div className="flex justify-center gap-4 pl-12">
        <Card className="bg-black w-[415px] h-[200px] border-[#27272A] flex flex-col mt-8 shadow-2xl ">
        <CardHeader>
        <CardTitle className="text-white text-[20px] pl-4">Seus Pacientes</CardTitle>
        <CardDescription className="text-white text-[16px] pl-4">Aqui você ver sua tabela de clientes e todos os seus objetivos.</CardDescription>
        </CardHeader>
        <CardContent>
        <SelecionarAcao/>
        </CardContent>
         </Card>
         <Card className="bg-black w-[415px] h-[200px] border-[#27272A] flex flex-col mt-8 shadow-2xl ">
            
        <PacientePorID/>
         </Card>
         </div>
         <Card className="bg-black w-[850px] h-[630px] border-[#27272A] ml-12 mt-1">
         <CardHeader>
            <div className="flex">
        <div>
        <CardTitle className="text-white text-[20px] pl-7 pt-2">Pacientes</CardTitle>
        <CardDescription className="text-gray-400 text-[16px] pl-7">Todos Seus Pacientes Abaixo. </CardDescription>
        </div>
        <div className="ml-auto">
            <RefreshButton/>
        </div>
        </div>
        </CardHeader>
        <CardContent>
        <ScrollArea className="h-[500px] w-[820px] rounded-md border-black">
            <Pacientes/>
         </ScrollArea>
        </CardContent>
         </Card>
         </div>
         
         <Card className="bg-black w-[600px] h-[850px] border-[#27272A] ml-6 mt-[102px]">
            <CardContent>
            <h1 className="text-white pl-32 pt-4 font-bold">Buscar Plano Nutricional do Paciente</h1>
            <ScrollArea className="h-[800px] w-[560px] rounded-md border-black ">
                <ListaPlanos/>
            </ScrollArea>
            </CardContent>
         </Card>
         </div>
    )
}