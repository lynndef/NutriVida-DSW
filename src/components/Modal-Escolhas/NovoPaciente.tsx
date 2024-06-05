import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import axios from "axios";
import { Toaster, toast } from "sonner";

export function NovoPaciente(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [objetivo, setObjetivo] = useState('');
    const [plano, setPlano] = useState('');

    async function salvarPaciente(event) {
        event.preventDefault();
        
        if (!nome || !email || !objetivo || !plano) {
            toast.error('Todos os campos são obrigatórios!');
            return;
        }

        let url = 'http://localhost:5000/pacientes';
    
        let corpo = {
          "nome": nome,
          "objetivo": objetivo,
          "email": email,
          "plano_nutricional": plano
        }
    
        try {
            let r = await axios.post(url, corpo);
            let info = r.data;
            
            toast.success('Paciente salvo com sucesso!');       

            setNome('');
            setEmail('');
            setObjetivo('');
            setPlano('');
        } catch (error) {
            toast.error('Erro ao salvar o paciente!');
        }
    }

    return( 
        <Dialog>
            
            <DialogTrigger>
                <button className="bg-black text-white rounded-sm w-[250px] h-[36px] font-primaryRegular text-2xl">Novo Paciente</button>
            </DialogTrigger>
            <DialogContent className="min-w-[600px] min-h-[400px]">
                <h1 className="text-3xl font-primarySemiBold mx-auto">Novo Paciente</h1>

                <form action="">
                    <div className="flex-col items-center flex gap-4 font-primaryRegular">

                        <h1>Nome*</h1>
                        <input 
                        type="text" 
                        value={nome} 
                        onChange={e => setNome(e.target.value)} 
                        className="bg-black text-white h-8 rounded-sm"
                        />

                        <h1>Email*</h1>
                        <input type="text" 
                        value={email} onChange={e => setEmail(e.target.value)} 
                        className="bg-black text-white h-8 rounded-sm"
                        />
                        
                        <h1>Objetivo*</h1>
                        <input type="text" 
                        value={objetivo} onChange={e => setObjetivo(e.target.value)}
                         className="bg-black text-white h-8 rounded-sm"
                         />

                        <h1>Plano Nutricional*</h1>
                        <textarea name="" id="" 
                        value={plano} onChange={e => setPlano(e.target.value)} 
                        className="bg-black text-white w-[400px] h-[150px] max-h-[150px] rounded-sm"></textarea>
                        <button onClick={salvarPaciente} className="text-white bg-black w-24 h-8">Enviar</button>
                    </div>    
                </form>
            </DialogContent>
        </Dialog>
    )
}
