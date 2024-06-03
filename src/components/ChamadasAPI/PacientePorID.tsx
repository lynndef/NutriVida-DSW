import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

export function PacientePorID() {
  const [pacienteId, setPacienteId] = useState("");
  const [paciente, setPaciente] = useState(null);

  const buscarPacientePorId = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/pacientes/${pacienteId}`);
      if (response.data && response.data.nome) {
        setPaciente(response.data);
        toast.success("Paciente encontrado com sucesso!");
      } else {
        toast.error("Paciente não encontrado");
      }
    } catch (error) {
      console.error("Erro ao buscar paciente por ID:", error);
      toast.error("Erro ao buscar paciente por ID");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarPacientePorId();
  };

  return (
    <div className="flex flex-col items-start pl-10">
      <Toaster position="top-center" richColors />
      <h1 className="text-white text-lg font-bold pt-6">Buscar Paciente Por ID</h1>
      {paciente && (
        <div className="text-white flex-col">
          <p>Nome: {paciente.nome}</p>
          <p>Objetivo: {paciente.objetivo}</p>
          <p>Email: {paciente.email}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex gap-4 items-center pt-2">
        <input
          className="bg-white h-8 rounded-sm"
          type="number"
          id="pacienteId"
          value={pacienteId}
          onChange={(e) => setPacienteId(e.target.value)}
        />
        <button className="bg-white w-32 h-11 font-medium rounded-lg" type="submit">Buscar</button>
      </form>
    </div>
  );
}
