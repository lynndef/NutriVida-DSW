import { useEffect, useState } from 'react';
import axios from 'axios';
import { Tabela } from './Tabela';
import { Planos } from './Planos';
import { InboxList } from './InboxList';

export function Inbox() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    async function fetchMensagens() {
      try {
        const response = await axios.get('http://localhost:5000/mensagens');
        setMensagens(response.data);
      } catch (error) {
        console.error('Erro ao buscar mensagens:', error);
      }
    }

    fetchMensagens();
  }, []);

  return (
    <>
      <InboxList dados={mensagens} />
    </>
  );
}

export function Pagamentos() {
  const [pagamentos, setPagamentos] = useState([]);

  useEffect(() => {
    async function fetchPagamentos() {
      try {
        const response = await axios.get('http://localhost:5000/consultas');
        setPagamentos(response.data);
      } catch (error) {
        console.error('Erro ao buscar consultas:', error);
      }
    }

    fetchPagamentos();
  }, []);

  return (
    <div>
      <Tabela dados={pagamentos} tipo="pagamentos" />
    </div>
  );
}

export function Pacientes() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    async function fetchPacientes() {
      try {
        const response = await axios.get('http://localhost:5000/pacientes');
        setPacientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);  
      }
    }

    fetchPacientes();
  }, []);

  return (
    <div>
      <Tabela dados={pacientes} tipo="pacientes" />
    </div>
  );
}

export function ListaPlanos() {
const [planos, setPlanos] = useState([]);

useEffect(() => {
    async function fetchPlanos() {
    try {
        const response = await axios.get('http://localhost:5000/pacientesplanos');
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
