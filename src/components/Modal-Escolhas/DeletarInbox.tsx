import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

export function DeletarInbox() {
  const [confirmacao, setConfirmacao] = useState(false);

  const deletarTodasAsMensagens = async () => {
    try {
      await axios.delete("http://20.102.117.177:5000/mensagens/all");
      console.log("Todas as mensagens foram excluídas com sucesso");
      toast.success("Todas as mensagens foram excluídas com sucesso!");
      setConfirmacao(false);
    } catch (error) {
      console.error("Erro ao excluir todas as mensagens:", error);
      toast.error("Erro ao excluir todas as mensagens");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-black text-white rounded-sm w-[250px] h-[36px] font-primaryRegular text-2xl">Deletar Inbox</button>
      </DialogTrigger>
      <DialogContent className="min-w-[600px] min-h-[200px] flex flex-col font-primaryRegular">
        <h1 className="text-3xl font-primarySemiBold mx-auto">Deletar Todas as Mensagens</h1>
        {!confirmacao && (
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Deseja realmente excluir todas as mensagens?</h2>
            <button className="text-white bg-red-500 w-28 h-8" onClick={() => setConfirmacao(true)}>Sim</button>
          </div>
        )}
        {confirmacao && (
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Confirma a exclusão de todas as mensagens?</h2>
            <button className="text-white bg-red-500 w-28 h-8" onClick={deletarTodasAsMensagens}>Confirmar</button>
            <button className="text-white bg-black w-28 h-8 mt-2" onClick={() => setConfirmacao(false)}>Cancelar</button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
