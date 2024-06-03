import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

export function AlterarConsulta() {
  const [consultaId, setConsultaId] = useState("");
  const [consulta, setConsulta] = useState(null);
  const [paciente, setPaciente] = useState(null);
  const [nome, setNome] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [horaConsulta, setHoraConsulta] = useState("");
  const [pagamentoStatus, setPagamentoStatus] = useState("");
  const [valor, setValor] = useState("");

  const buscarConsultaPorId = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/consultas/${consultaId}`);
      setConsulta(response.data);
      setNome(response.data.nome);
      setDataConsulta(response.data.data_consulta);
      setHoraConsulta(response.data.hora_consulta);
      setPagamentoStatus(response.data.pagamento_status);
      setValor(response.data.valor);
      
      const pacienteResponse = await axios.get(`http://localhost:5000/pacientes/${response.data.paciente_id}`);
      setPaciente(pacienteResponse.data);
    } catch (error) {
      console.error("Erro ao buscar consulta por ID:", error);
      toast.error("Erro ao buscar consulta por ID");
    }
  };

  const atualizarConsulta = async (e) => {
    e.preventDefault();
    
    if (!consultaId || !nome || !dataConsulta || !horaConsulta || !pagamentoStatus) {
      toast.error("Todos os campos são obrigatórios!");
      return;
    }
    
    try {
      const response = await axios.put(`http://localhost:5000/consultas/${consultaId}`, {
        paciente_id: consulta.paciente_id,
        nome,
        data_consulta: dataConsulta,
        hora_consulta: horaConsulta,
        pagamento_status: pagamentoStatus,
        valor: valor,
      });
      console.log("Consulta atualizada com sucesso:", response.data);
      toast.success("Consulta atualizada com sucesso!");
      
      setConsultaId("");
      setConsulta(null);
      setPaciente(null);
      setNome("");
      setDataConsulta("");
      setHoraConsulta("");
      setPagamentoStatus("");
      setValor("");
    } catch (error) {
      console.error("Erro ao atualizar consulta:", error);
      toast.error("Erro ao atualizar consulta");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarConsultaPorId();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-black text-white rounded-sm w-[250px] h-[36px] font-primaryRegular text-2xl">Alterar Consulta</button>
      </DialogTrigger>
      <DialogContent className="min-w-[600px] min-h-[400px] flex flex-col font-primaryRegular">
        <h1 className="text-3xl font-primarySemiBold mx-auto">Alterar Consulta</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <label htmlFor="consultaId">ID da Consulta:</label>
          <input
            className="bg-black text-white h-8 rounded-sm"
            type="number"
            id="consultaId"
            value={consultaId}
            onChange={(e) => setConsultaId(e.target.value)}
          />
          {consulta && paciente && (
            <div className="font-primaryBold flex-col">
              <p>Nome do Paciente: {paciente.nome}</p>
              <p>Objetivo do Paciente: {paciente.objetivo}</p>
              <p>Email do Paciente: {paciente.email}</p>
              <p>Data da Consulta: {consulta.data_consulta}</p>
              <p>Hora da Consulta: {consulta.hora_consulta}</p>
              <p>Status do Pagamento: {consulta.pagamento_status}</p>
              <p>Valor: {consulta.valor}</p>
            </div>
          )}
          <button className="text-white bg-black w-24 h-8" type="submit">Buscar</button>
        </form>

        {consulta && (
          <form onSubmit={atualizarConsulta} className="flex flex-col items-center gap-2 mt-4">
            <h2 className="font-bold">Atualizar Consulta</h2>
            <label htmlFor="pacienteNome">Nome do Paciente:</label>
            <input
              className="bg-black text-white h-8 rounded-sm"
              type="text"
              id="pacienteNome"
              value={nome}
              readOnly
            />
            <label htmlFor="dataConsulta">Data da Consulta:</label>
            <input
              className="bg-black text-white h-8 rounded-sm"
              type="date"
              id="dataConsulta"
              value={dataConsulta}
              onChange={(e) => setDataConsulta(e.target.value)}
            />
            <label htmlFor="horaConsulta">Hora da Consulta:</label>
            <input
              className="bg-black text-white h-8 rounded-sm"
              type="time"
              id="horaConsulta"
              value={horaConsulta}
              onChange={(e) => setHoraConsulta(e.target.value)}
            />
            <label htmlFor="pagamentoStatus">Status do Pagamento:</label>
            <select
              className="bg-black text-white h-8 rounded-sm"
              id="pagamentoStatus"
              value={pagamentoStatus}
              onChange={(e) => setPagamentoStatus(e.target.value)}
            >
              <option value="pendente">Pendente</option>
              <option value="ok">OK</option>
            </select>
            <label htmlFor="Valor">Valor:</label>
            <input
              className="bg-black text-white h-8 rounded-sm w-32"
              type="number"
              id="valor"  
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
            <button className="text-white bg-black w-28 h-8" type="submit">Atualizar</button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
