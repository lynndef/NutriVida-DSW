import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tabela } from './TabelaAll';
import { Planos } from './Planos';
import { InboxList } from './Inbox';

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

  useEffect(() => {
    async function fetchPagamentos() {
      try {
        const response = await axios.get('http://20.102.117.177:5000/consultas');
        setPagamentos(response.data);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
      }
    }

    fetchPagamentos();
  }, []);

  return (
    <div>
      <Tabela dados={pagamentos} tipo="pagamentos" showDateFilter={showDateFilter} bgColor="bg-white" textColor="text-black"/>
    </div>
  );
}

export function Pacientes() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    async function fetchPacientes() {
      try {
        const response = await axios.get('http://20.102.117.177:5000/pacientes');
        setPacientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);  
      }
    }

    fetchPacientes();
  }, []);

  return (
    <div>
      <Tabela dados={pacientes} tipo="pacientes" textColor="text-white"/>
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

  useEffect(() => {
    async function fetchValorTotal() {
      try {
        const response = await axios.get('http://20.102.117.177:5000/consultas/valor-total');
        setValorTotal(Number(response.data.total));
      } catch (error) {
        console.error('Erro ao buscar valor total das consultas:', error);
      }
    }

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
    </div>
  );
}