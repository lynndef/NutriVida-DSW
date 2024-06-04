import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

export function NovaConsulta() {
  const [pacienteId, setPacienteId] = useState("");
  const [paciente, setPaciente] = useState(null);
  const [nome, setNome] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [horaConsulta, setHoraConsulta] = useState("");
  const [pagamentoStatus, setPagamentoStatus] = useState("pendente");
  const [valor, setValor] = useState("");

  const buscarPacientePorId = async () => {
    try {
      const response = await axios.get(`http://20.102.117.177:5000/pacientes/${pacienteId}`);
      setPaciente(response.data);
      setNome(response.data.nome);
    } catch (error) {
      console.error("Erro ao buscar paciente por ID:", error);
      toast.error("Erro ao buscar paciente por ID");
    }
  };

  const salvarConsulta = async (e) => {
    e.preventDefault();
    
    if (!pacienteId || !nome || !dataConsulta || !horaConsulta || !pagamentoStatus) {
      toast.error("Todos os campos são obrigatórios!");
      return;
    }
    
    try {
      const response = await axios.post("http://20.102.117.177:5000/consultas", {
        paciente_id: pacienteId,
        nome,
        data_consulta: dataConsulta,
        hora_consulta: horaConsulta,
        pagamento_status: pagamentoStatus,
        valor: valor
      });
      console.log("Consulta cadastrada com sucesso:", response.data);
      toast.success("Consulta cadastrada com sucesso!");
      
      setPacienteId("");
      setPaciente(null);
      setNome("");
      setDataConsulta("");
      setHoraConsulta("");
      setPagamentoStatus("pendente");
      setValor("")
    } catch (error) {
      console.error("Erro ao cadastrar consulta:", error);
      toast.error("Erro ao cadastrar consulta");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    buscarPacientePorId();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-black text-white rounded-sm w-[250px] h-[36px] font-primaryRegular text-2xl">Nova Consulta</button>
      </DialogTrigger>
      <DialogContent className="min-w-[600px] min-h-[400px] flex flex-col font-primaryRegular">
        <h1 className="text-3xl font-primarySemiBold mx-auto">Nova Consulta</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <label htmlFor="pacienteId">ID do Paciente:</label>
          <input
            className="bg-black text-white h-8 rounded-sm"
            type="number"
            id="pacienteId"
            value={pacienteId}
            onChange={(e) => setPacienteId(e.target.value)}
          />
          {paciente && (
            <div className="font-primaryBold flex-col">
              <p>Nome: {paciente.nome}</p>
              <p>Objetivo: {paciente.objetivo}</p>
              <p>Email: {paciente.email}</p>
            </div>
          )}
          <button className="text-white bg-black w-24 h-8" type="submit">Buscar</button>
        </form>

        {paciente && (
          <form onSubmit={salvarConsulta} className="flex flex-col items-center gap-2 mt-4">
            <h2 className="font-bold">Cadastrar Consulta</h2>
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
              className="bg-black text-white h-8 rounded-sm"
              type="number"
              id="Valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
            <button className="text-white bg-black w-28 h-8" type="submit">Cadastrar</button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
