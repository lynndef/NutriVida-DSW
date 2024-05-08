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
    <aside className="border-solid border-[1px] border-black h-screen w-[600px]">
      <input 
        type="text" 
        placeholder="Digite o ID do paciente..." 
        className="bg-[url(/imagens/search.webp)] bg-no-repeat bg-[center_left_1rem] bg-[length:30px_30px] text-white bg-black h-[48px] ml-[150px] mt-20 rounded-xl pl-[60px]"
        value={pacienteId}
        onChange={(event) => setPacienteId(event.target.value)}
      />
      <button 
        onClick={buscarPacientePlanos}
        className="bg-black text-white font-bold py-2 px-4 rounded-xl h-[48px]" 
      >
        Enviar
      </button>
      <Table className="mt-12">
      <TableHeader>
        <TableHead className="text-black pl-48 text-2xl">Plano Nutricional</TableHead>
      </TableHeader>
      <TableBody>
        <TableRow>
        {planoPaciente && planoPaciente.length > 0 ? (
          planoPaciente.map((item, index) => (
            <TableCell key={index} className="pl-8 text-[16px]"> 
              {item.plano_nutricional}
            </TableCell>
          ))
        ) : (
          <div className="pl-24 text-base">Nenhum plano encontrado</div>
        )}
        </TableRow>
        </TableBody>
      </Table>
      
    </aside>
  );
}
