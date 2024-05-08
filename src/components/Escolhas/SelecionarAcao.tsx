import { AlterarPaciente } from "./AlterarPaciente";
import { NovoPaciente } from "./NovoPaciente";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { NovaConsulta } from "./NovaConsulta";
import { DeletarConsulta } from "./DeletarConsulta";
import { DeletarPaciente } from "./DeletarPaciente";
import { DeletarInbox } from "./DeletarInbox";

export function SelecionarAcao(){
    return(
        <div>
        <Dialog>
            <DialogTrigger> <h1 className="text-4xl font-primaryBold">+</h1> </DialogTrigger>
            <DialogContent>
                <h1 className="text-4xl font-primarySemiBold mx-auto">Selecione a Ação</h1>´
                <div className="flex flex-col items-center gap-8">
                <NovoPaciente/>
                <AlterarPaciente/>
                <NovaConsulta/>
                <DeletarPaciente/>
                <DeletarConsulta/>
                <DeletarInbox/>
                </div>
            </DialogContent>
        </Dialog>
       
        </div>
        
    )
}