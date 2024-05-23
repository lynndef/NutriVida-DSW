import { useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export function Planos({ dados }) {
  const [pacienteId, setPacienteId] = useState("");
  const [planoPaciente, setPlanoPaciente] = useState([]);

  async function buscarPacientePlanos(event) {
    event.preventDefault();
    
    let url = `http://localhost:5000/pacientesplanos/${pacienteId}`;

    try {
        const response = await axios.get(url);
        const paciente = response.data;
        setPlanoPaciente(paciente);
    } catch (error) {
        alert('Paciente não encontrado');
        console.error(error);
    }
  }

  return (
  <>
      <input 
        type="number"
        placeholder="Digite o ID do paciente..." 
        className=" text-black bg-gray-white h-[36px] ml-32 mt-12 rounded-sm border-[#151518] placeholder:text-black"
        value={pacienteId}
        onChange={(event) => setPacienteId(event.target.value)}
      />
      <button 
        onClick={buscarPacientePlanos}
        className="bg-white text-black font-medium py-2 px-4 ml-2 rounded-sm h-[36px]" 
      >
        Buscar
      </button>
      <Table className="mt-4">
      <TableHeader>
        <TableHead className="text-white pl-56 text-sm">Plano Nutricional</TableHead>
      </TableHeader>
      <TableBody>
        <TableRow>
        {planoPaciente && planoPaciente.length > 0 ? (
          planoPaciente.map((item, index) => (
            <TableCell key={index} className="text-white prose"> 
              {item.plano_nutricional}
            </TableCell>
          ))
        ) : (
          <div className="text-white pl-48 text-sm">Nenhum plano encontrado</div>
        )}
        </TableRow>
        </TableBody>
      </Table>
      
      </>
  );
}
