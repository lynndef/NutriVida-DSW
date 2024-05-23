  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

  export function Tabela({ dados, tipo }) {

    let colunas = [];
    colunas = tipo === "inbox" ? ["Nome", "Email", "Mensagem"] :
    tipo === "pagamentos" ? ["Consulta ID", "Paciente Nome", "Consulta Dia", "Consulta Hora", "Pagamento"] :
    tipo === "pacientes" ? ["Paciente ID", "Paciente Nome", "Objetivo", "Email"] :
    [];


    function getValue(value) {
      let date = new Date(value);
      if (!isNaN(date.getDate()) && typeof(value) == 'string')
        return date.toLocaleDateString();
      else 
        return value;
    }

    return (
        <Table>
          <TableHeader>
            {colunas.map((coluna, index) => (
              <TableHead className="text-[#96969E] pl-16 text-sm" key={index}> {coluna}</TableHead>
            ))}
          </TableHeader>
          <TableBody>
            {dados.map((item, index) => (
              <TableRow key={index} className="border-stone-700">
                {Object.keys(item).map((chave, index) => (
                    <TableCell className="text-white pl-16 text-sm pt-6 " key={index}> 
                      {getValue(item[chave])}
                    </TableCell>      
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

    );
  }