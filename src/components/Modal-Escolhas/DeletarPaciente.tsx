import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

export function DeletarPaciente() {
  const [pacienteId, setPacienteId] = useState("");
  const [paciente, setPaciente] = useState(null);

  const buscarPacientePorId = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/pacientes/${pacienteId}`);
      setPaciente(response.data);
    } catch (error) {
      console.error("Erro ao buscar paciente por ID:", error);
      toast.error("Erro ao buscar paciente por ID");
      setPaciente(null);
    }
  };

  const deletarPaciente = async () => {
    try {
      await axios.delete(`http://localhost:5000/pacientes/${pacienteId}`);
      console.log("Paciente excluído com sucesso");
      toast.success("Paciente excluído com sucesso!");
      setPaciente(null);
      setPacienteId("");
    } catch (error) {
      console.error("Erro ao excluir paciente:", error);
      toast.error("Erro ao excluir paciente");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarPacientePorId();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-black text-white rounded-sm w-[250px] h-[36px] font-primaryRegular text-2xl">Deletar Paciente</button>
      </DialogTrigger>
      <DialogContent className="min-w-[600px] min-h-[400px] flex flex-col font-primaryRegular">
        <h1 className="text-3xl font-primarySemiBold mx-auto">Deletar Paciente</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <label htmlFor="pacienteId">ID do Paciente:</label>
          <input
            className="bg-black text-white h-8 rounded-sm"
            type="number"
            id="pacienteId"
            value={pacienteId}
            onChange={(e) => setPacienteId(e.target.value)}
          />
          {paciente && (
            <div className="font-primaryBold flex-col">
              <p>ID: {paciente.id}</p>
              <p>Nome: {paciente.nome}</p>
              <p>Objetivo: {paciente.objetivo}</p>
              <p>Email: {paciente.email}</p>
            </div>
          )}
          <button className="text-white bg-black w-24 h-8" type="submit">Buscar</button>
        </form>
        {paciente && (
          <div className="flex flex-col items-center">
            <h2 className="font-bold">Deseja realmente excluir este paciente?</h2>
            <button className="text-white bg-red-500 w-28 h-8" onClick={deletarPaciente}>Excluir</button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
