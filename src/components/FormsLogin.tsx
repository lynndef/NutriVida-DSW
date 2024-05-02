import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DialogContent, DialogTrigger, Dialog} from "./ui/dialog";

export function FormsLogin(){

    const [username, setNewUsername] = useState('')
    const [password, setNewPassword] = useState('')
    const Navigate = useNavigate();
   
       function Validacao(event: FormEvent){

         event.preventDefault();
        (username === 'admin' && password === '123') ? Navigate("/login") : alert('Usuário ou senha incorretos!'); 

       }

    return(
        <div className='relative top-[-550px] pl-[50px] z-10'>  
        <Dialog>
          <DialogTrigger asChild>         
          <img src="/imagens/avatar-logo.webp" alt="" className='avatar w-[80px]' />
          </DialogTrigger> 
          <DialogContent>
            <h1 className="mx-auto text-2xl font-primarySemiBold">Admin-Login</h1>

            <form onSubmit={Validacao} className="flex flex-col gap-y-6">
              
              <label htmlFor="" className="text-2xl">Usuário</label>
              <input type="text" value={username} onChange={(event) => {setNewUsername(event.target.value)}}  className="bg-zinc-600 h-8 text-white text-2xl"/>
              
              <label htmlFor="" className="text-2xl">Senha</label>
              <input type="password" value={password} onChange={(event) => {setNewPassword(event.target.value)}}  className="bg-zinc-600 h-8 text-white text-2xl" />
              <button type="submit" className="bg-black text-white w-28 h-8 mx-auto text-2xl">Enviar</button>
            
            </form>

          </DialogContent>
        </Dialog>
      </div>
    )
}