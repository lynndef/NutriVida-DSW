import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import axios from "axios";

export function AlterarPaciente() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [objetivo, setObjetivo] = useState('');
    const [plano, setPlano] = useState('');

    async function buscarPaciente(event) {
        event.preventDefault();
        
        let url = `http://localhost:5000/pacientes/${id}`;
    
        try {
            const response = await axios.get(url);
            const paciente = response.data;

            setNome(paciente.nome);
            setEmail(paciente.email);
            setObjetivo(paciente.objetivo);
            setPlano(paciente.plano_nutricional);
        } catch (error) {
            alert('Paciente não encontrado');
            console.error(error);
        }
    }

    async function salvarAlteracoes(event) {
        event.preventDefault();
        
        let urlPaciente = `http://localhost:5000/pacientes/${id}`;
    
        let corpoPaciente = {
            "nome": nome,
            "objetivo": objetivo,
            "email": email,
            "plano_nutricional": plano
        }

        try {
            await axios.put(urlPaciente, corpoPaciente);
            alert('Alterações salvas com sucesso!');
        } catch (error) {
            alert('Erro ao salvar alterações');
            console.error(error);
        }
    }

    return( 
        <Dialog>
            <DialogTrigger>
                <button className="bg-black text-white rounded-sm w-[250px] h-[36px] font-primaryRegular text-2xl">Alterar Paciente</button>
            </DialogTrigger>
            <DialogContent className="min-w-[600px] min-h-[400px]">
                <h1 className="text-3xl font-primarySemiBold mx-auto">Alterar Paciente</h1>

                <form onSubmit={buscarPaciente}>
                    <div className="flex-col items-center flex gap-4 font-primaryRegular">
                        <h1>ID do Paciente*</h1>
                        <input 
                            type="text" 
                            value={id} 
                            onChange={e => setId(e.target.value)} 
                            className="bg-black text-white h-8 rounded-sm"
                        />
                        <button type="submit" className="text-white bg-black w-24 h-8">Buscar</button>
                    </div>    
                </form>

                <form onSubmit={salvarAlteracoes}>
                    <div className="flex-col items-center flex gap-4 font-primaryRegular mt-4">
                        <h1>Nome*</h1>
                        <input 
                            type="text" 
                            value={nome} 
                            onChange={e => setNome(e.target.value)} 
                            className="bg-black text-white h-8 rounded-sm"
                        />

                        <h1>Email*</h1>
                        <input 
                            type="text" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            className="bg-black text-white h-8 rounded-sm"
                        />
                        
                        <h1>Objetivo*</h1>
                        <input 
                            type="text" 
                            value={objetivo} 
                            onChange={e => setObjetivo(e.target.value)} 
                            className="bg-black text-white h-8 rounded-sm"
                        />

                        <h1>Plano Nutricional*</h1>
                        <textarea 
                            value={plano} 
                            onChange={e => setPlano(e.target.value)} 
                            className="bg-black text-white w-[400px] h-[150px] max-h-[150px] rounded-sm"
                        ></textarea>
                        <button type="submit" className="text-white bg-black w-24 h-8">Salvar</button>
                    </div>    
                </form>
            </DialogContent>
        </Dialog>
    )
}
