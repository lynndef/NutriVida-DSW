import axios from 'axios'
import { useState } from 'react';
import { toast } from 'sonner';

export function Forms(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    async function salvarMsg(event) {
      event.preventDefault();
      
      const isCampoVazio = nome.trim() === '' || email.trim() === '' || msg.trim() === '';    
      isCampoVazio && toast.error('Por favor, preencha todos os campos.'); 
      if (isCampoVazio) return;
      
      let url = 'http://20.102.117.177:5000/mensagens';
  
      let corpo = {
        "nome_rem": nome,
        "email_rem": email,
        "mensagem": msg
      }
  
      let r = await axios.post(url, corpo);
      let info = r.data;
      
      toast.success('Mensagem enviada com sucesso! ');       
   
      setNome('');
      setEmail('');
      setMsg('');
    }
  
    return(
           
        <div className="flex gap-4 pt-12">
        <form action="" className="flex flex-col gap-2">

          <div className="flex gap-x-4">
          <div className="flex flex-col">
          <label htmlFor="">Nome*</label>
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} className="bg-[#414141] text-white w-[200px] h-[36px] text-2xl"/>
          </div>

          <div className="flex flex-col">
          <label htmlFor="">Email*</label>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="bg-[#414141] text-white w-[200px] h-[36px] text-2xl" />
          </div>
          </div>

          <label htmlFor="">Mensagem*</label>
          <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder="Olá! Gostaria de..." className="bg-[#414141] text-white w-[420px] h-[140px] max-h-[140px] text-2xl "></textarea>
          <button onClick={salvarMsg} className="bg-black text-white my-8 ml-[120px] w-[180px] h-[36px]">Enviar</button>
        </form>
        </div>
        
    )
}
