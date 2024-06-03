import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export function Tabela({ dados, tipo, showDateFilter = false, bgColor, textColor }) {
  const [filtroData, setFiltroData] = useState('');

  const colunas = tipo === 'inbox' ? ['Nome', 'Email', 'Mensagem'] :
                  tipo === 'pagamentos' ? ['Consulta ID', 'Paciente Nome', 'Consulta Dia', 'Consulta Hora', 'Pagamento', 'Valor'] :
                  tipo === 'pacientes' ? ['Paciente ID', 'Paciente Nome', 'Objetivo', 'Email'] :
                  [];

  function getValue(value) {
    let date = new Date(value);
    if (!isNaN(date.getDate()) && typeof(value) === 'string')
      return date.toLocaleDateString();
    else 
      return value;
  }

  function Filtro(event) {
    setFiltroData(event.target.value);
  }

  const dadosFiltrados = dados.filter(item => {
    if (!filtroData) return true;
    return Object.values(item).some(value => {
      let date = new Date(value);
      return !isNaN(date.getDate()) && date.toLocaleDateString().includes(filtroData);
    });
  });

  return (
    <div>
      {showDateFilter && (
        <div className='flex justify-start pr-4'>
         <textarea
          className="w-[280px] bg-black border-[#27272A] border-2 text-white mt-2 mb-4 ml-6 max-h-[30px] min-h-[35px] placeholder:text-sm pl-3 pt-1 rounded-sm" 
          placeholder="Filtrar por data.." 
          value={filtroData} 
          onChange={Filtro} 
        />
        </div>
      )}
      <Table className={bgColor}>
        <TableHeader>
          {colunas.map((coluna, index) => (
            <TableHead className={`${textColor} pl-16 text-sm`} key={index}>{coluna}</TableHead>  
          ))}
        </TableHeader>
        <TableBody>
          {dadosFiltrados.map((item, index) => (
            <TableRow key={index} className="border-stone-700">
              {Object.keys(item).map((chave, index) => (
                <TableCell className={`pl-16 text-sm pt-6 ${textColor}`} key={index}>
                  {getValue(item[chave])}
                </TableCell>      
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
