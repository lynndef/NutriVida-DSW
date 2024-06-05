import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tabela } from './TabelaAll';
import { Planos } from './Planos';
import { InboxList } from './Inbox';
import { RefreshCw } from 'lucide-react';

export function Inbox({ MensagemSelecionada }) {
  const [mensagens, setMensagens] = useState([]);

  const fetchMensagens = async () => {
    try {
      const response = await axios.get('http://20.102.117.177:5000/mensagens');
      setMensagens(response.data);
    } catch (error) {
      console.error('Erro ao buscar mensagens:', error);
    }
  };

  useEffect(() => {
    fetchMensagens();
  }, []);

  return (
    <>
      <InboxList dados={mensagens} MensagemSelecionada={MensagemSelecionada} fetchMensagens={fetchMensagens} />
    </>
  );
}

export function Pagamentos({ showDateFilter = false }) {
  const [pagamentos, setPagamentos] = useState([]);

  async function fetchPagamentos() {
    try {
      const response = await axios.get('http://20.102.117.177:5000/consultas');
      setPagamentos(response.data);
    } catch (error) {
      console.error('Erro ao buscar consultas:', error);
    }
  }

  useEffect(() => {
    fetchPagamentos();
  }, []);

  return (
    <>
      <button 
        className="flex items-center justify-center bg-black text-white rounded-lg ml-auto w-8 h-8 "
        onClick={fetchPagamentos}
      >
       <RefreshCw size={24} />
      </button>
      <Tabela dados={pagamentos} tipo="pagamentos" showDateFilter={showDateFilter} bgColor="bg-white" textColor="text-black"/>
    </>
  );
}

export function Pacientes() {
  const [pacientes, setPacientes] = useState([]);

  async function fetchPacientes() {
    try {
      const response = await axios.get('http://20.102.117.177:5000/pacientes');
      setPacientes(response.data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  }

  useEffect(() => {
    fetchPacientes();
  }, []);

  return (
    <div>
      <button 
        className="flex items-center justify-center bg-black text-white rounded-lg ml-auto pr-6"
        onClick={fetchPacientes}
      >
       <RefreshCw size={24} />
      </button>
      <Tabela dados={pacientes} tipo="pacientes" textColor="text-white" />
    </div>
  );
}

export function ListaPlanos() {
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    async function fetchPlanos() {
      try {
        const response = await axios.get('http://20.102.117.177:5000/pacientesplanos');
        setPlanos(response.data);
      } catch (error) {
        console.error('Erro ao buscar planos:', error);  
      }
    }

    fetchPlanos();
  }, []);

  return (
    <div>
      <Planos dados={planos} />
    </div>
  );
}

export function TotalConsultas() {
  const [valorTotal, setValorTotal] = useState(null);

  async function fetchValorTotal() {
    try {
      const response = await axios.get('http://20.102.117.177:5000/consultas/valor-total');
      setValorTotal(Number(response.data.total));
    } catch (error) {
      console.error('Erro ao buscar valor total das consultas:', error);
    }
  }

  useEffect(() => {
    fetchValorTotal();
  }, []);

  return (
    <div className='flex flex-col gap-1.5'>
      <h1 className='font-bold text-[20px]'>Valor Total das Consultas</h1>
      <p>Soma dos valores de todas as consultas pagas.</p>
      
      {valorTotal !== null ? (
        <p className='text-4xl'>{`R$ ${valorTotal.toFixed(2)}`}</p> 
      ) : (
        <p>Carregando...</p>
      )}
      <button 
        className="flex items-center justify-center bg-black text-white rounded-lg w-8 h-8 "
        onClick={fetchValorTotal}
      >
       <RefreshCw size={24} />
      </button>
    </div>
  );
}
