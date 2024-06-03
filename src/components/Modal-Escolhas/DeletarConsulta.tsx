import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

export function DeletarConsulta() {
  const [consultaId, setConsultaId] = useState("");
  const [consulta, setConsulta] = useState(null);

  const buscarConsultaPorId = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/consultas/${consultaId}`);
      setConsulta(response.data);
    } catch (error) {
      console.error("Erro ao buscar consulta por ID:", error);
      toast.error("Erro ao buscar consulta por ID");
    }
  };

  const deletarConsulta = async () => {
    try {
      await axios.delete(`http://localhost:5000/consultas/${consultaId}`);
      console.log("Consulta excluída com sucesso");
      toast.success("Consulta excluída com sucesso!");
      setConsulta(null);
      setConsultaId("");
    } catch (error) {
      console.error("Erro ao excluir consulta:", error);
      toast.error("Erro ao excluir consulta");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarConsultaPorId();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-black text-white rounded-sm w-[250px] h-[36px] font-primaryRegular text-2xl">Deletar Consulta</button>
      </DialogTrigger>
      <DialogContent className="min-w-[600px] min-h-[400px] flex flex-col font-primaryRegular">
        <h1 className="text-3xl font-primarySemiBold mx-auto">Deletar Consulta</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <label htmlFor="consultaId">ID da Consulta:</label>
          <input
            className="bg-black text-white h-8 rounded-sm"
            type="number"
            id="consultaId"
            value={consultaId}
            onChange={(e) => setConsultaId(e.target.value)}
          />
          {consulta && (
            <div className="font-primaryBold flex-col">
              <p>ID: {consulta.id}</p>
              <p>Nome do Paciente: {consulta.nome}</p>
              <p>Data da Consulta: {consulta.data_consulta}</p>
              <p>Hora da Consulta: {consulta.hora_consulta}</p>
              <p>Status do Pagamento: {consulta.pagamento_status}</p>
            </div>
          )}
          <button className="text-white bg-black w-24 h-8" type="submit">Buscar</button>
        </form>
        {consulta && (
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Deseja realmente excluir esta consulta?</h2>
            <button className="text-white bg-red-500 w-28 h-8" onClick={deletarConsulta}>Excluir</button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
