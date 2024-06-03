import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"; 
import { toast } from "sonner";
import { Trash2 } from 'lucide-react';

export function InboxList({ dados, MensagemSelecionada, fetchMensagens }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/mensagens/${id}`);
      toast.success('Mensagem excluída com sucesso!');
      fetchMensagens(); 
    } catch (error) {
      console.error('Erro ao excluir mensagem:', error);
      toast.error('Erro ao excluir mensagem');
    }
  };

  return (
    <>
      {dados.map((item, index) => (
        <Card 
          key={index} 
          className="flex flex-col bg-black text-white border-[#27272A] w-[750px] relative"
          onClick={() => MensagemSelecionada(item)}
        >
          <CardHeader>
            <CardTitle>{item.nome_rem}</CardTitle>
            <h1 className="text-sm font-medium">{item.email_rem}</h1>
            <button
              className="absolute top-4 right-4 text-red-500"
              onClick={(e) => {
                e.stopPropagation(); 
                handleDelete(item.id);
              }}
            >
              <Trash2/>
            </button>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-[#96969E] text-sm">{item.mensagem}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
