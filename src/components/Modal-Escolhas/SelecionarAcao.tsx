import { AlterarPaciente } from "./AlterarPaciente";
import { NovoPaciente } from "./NovoPaciente";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { NovaConsulta } from "./NovaConsulta";
import { DeletarConsulta } from "./DeletarConsulta";
import { DeletarPaciente } from "./DeletarPaciente";
import { DeletarInbox } from "./DeletarInbox";
import { AlterarConsulta } from "./AlterarConsulta";

export function SelecionarAcao({ bgColor = 'bg-white', textColor = 'text-black' }) {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    <button className={`w-32 h-12 font-medium rounded-lg ml-4 ${bgColor} ${textColor}`}>
                        Editar Dados
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <h1 className="text-4xl font-primarySemiBold mx-auto">Selecione a Ação</h1>
                    <div className="flex flex-col items-center gap-8">
                        <NovoPaciente />
                        <AlterarPaciente />
                        <NovaConsulta />
                        <AlterarConsulta />
                        <DeletarPaciente />
                        <DeletarConsulta />
                        <DeletarInbox />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
