  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

  export function Tabela({ dados, tipo }) {

    let colunas = [];
    colunas = tipo === "inbox" ? ["Nome", "Email", "Mensagem"] :
    tipo === "pagamentos" ? ["Consulta ID", "Paciente Nome", "Consulta Dia", "Consulta Hora", "Pagamento"] :
    tipo === "pacientes" ? ["Paciente ID", "Paciente Nome", "Objetivo", "Email"] :
    [];

    return (
        <Table>
          <TableHeader>
            {colunas.map((coluna, index) => (
              <TableHead className="text-black pl-32 text-2xl" key={index}> {coluna}</TableHead>
            ))}
          </TableHeader>
          <TableBody>
            {dados.map((item, index) => (
              <TableRow key={index}>
                {Object.keys(item).map((chave, index) => (
                    <TableCell className="pl-32 text-base" key={index}> 
                      {item[chave]}
                    </TableCell>      
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

    );
  }