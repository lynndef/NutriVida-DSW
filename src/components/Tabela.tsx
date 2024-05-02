import { Table, TableHead, TableHeader } from "./ui/table";

export function Tabela(props){
    return(
      <Table>
        <TableHeader className="flex gap-36 text-[20px]">
            <TableHead className="text-black">{props.table1}</TableHead>
            <TableHead className="text-black">{props.table2}</TableHead>
            <TableHead className="text-black">{props.table3}</TableHead>
            <TableHead className="text-black">{props.table4}</TableHead>
            <TableHead className="text-black">{props.table5}</TableHead>
           
        </TableHeader>
      </Table>
    )
}