import { Toaster } from "sonner";
import { SelecionarAcao } from "../Modal-Escolhas/SelecionarAcao";
import { Pagamentos, TotalConsultas } from "../ChamadasAPI/AllRequests";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Link } from "react-router-dom";
import { RefreshButton } from "../ui/RefreshButton";

export function ConsultasUI() {
  return (
    <>
      <div className="w-screen flex bg-white justify-center font-Geist-Sans"> 
        <Toaster position="top-center" richColors />  
        <div className="flex flex-col mt-8">
          <h1 className="text-black">
            <Link to="/AdminMenu">Admin-Menu</Link> &nbsp; &gt; 
            <span className="text-gray-600"> &nbsp; Consultas</span>
          </h1>
          <h1 className="font-bold text-[24px] pt-2">Consultas</h1>
          <div className="flex">
          <Card className="bg-white w-[415px] h-[200px] mt-4 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-black text-[20px] pl-4">Suas Consultas</CardTitle>
              <CardDescription className="text-black text-[16px] pl-4">Aqui você vê suas consultas agendadas.</CardDescription>        
            </CardHeader>
            <CardContent>
              <SelecionarAcao bgColor="bg-black" textColor="text-white"/>
            </CardContent>
          </Card>
          <Card className="bg-white w-[415px] h-[200px] mt-4 shadow-2xl ml-[120px]">
            <CardContent className="pl-12 pt-5">
            <TotalConsultas />
            </CardContent>
          </Card>
          </div>

          <Card className="bg-white w-[950px] h-[630px] mt-2 shadow-2xl">
            <CardHeader>
              <div className="flex">
              <div>
              <CardTitle className="text-black text-[20px] pl-7 pt-2">Suas Consultas Agendadas</CardTitle>
              <CardDescription className="text-gray-600 text-[16px] pl-7">Todas elas abaixo.</CardDescription>
              </div>
              <div className="ml-auto">
                <RefreshButton/>
              </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px] w-[900px] rounded-md border-black pr-4">
                <Pagamentos showDateFilter={true} />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
