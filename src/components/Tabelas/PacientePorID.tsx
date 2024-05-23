import { useState } from "react";
import axios from "axios";

export function PacientePorID() {
  const [pacienteId, setPacienteId] = useState("");
  const [paciente, setPaciente] = useState(null);

  const buscarPacientePorId = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/pacientes/${pacienteId}`);
      setPaciente(response.data);
    } catch (error) {
      console.error("Erro ao buscar paciente por ID:", error);
      alert("Erro ao buscar paciente por ID");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarPacientePorId();
  };

  return (
    <div className="flex flex-col items-start pl-12">
        <h1 className="text-white text-lg font-medium pt-6">Buscar Paciente Por ID</h1>
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
        <button className="bg-white w-32 h-12 font-medium rounded-lg ml-6" type="submit">Buscar</button>
      </form>
    </div>
  )
}
