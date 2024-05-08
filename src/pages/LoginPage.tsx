import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/LandingPage/Header";
import { Icones } from "../components/LandingPage/Icones";
import { DialogContent, DialogTrigger, Dialog} from "../components/ui/dialog";
import { Forget } from "../components/Forms/Forget";

export function LoginPage(){

       const [username, setNewUsername] = useState('')
       const [password, setNewPassword] = useState('')
       const Navigate = useNavigate();
 
       function Validacao(event: FormEvent){

       event.preventDefault();
      (username === 'admin' && password === '123') ? Navigate("/AdminMenu") : alert('Usuário ou senha incorretos!'); 
     }

    return(
     <> 
            <div className="bg-[url('/imagens/bg-login.webp')] bg-no-repeat bg-center bg-cover h-screen w-screen ">
            <Header/>
            <Icones/>
                  
            <div className="text-4xl text-center pt-20 relative top-[-185px] z-20 text-white">
                <h1 className="font-primarySemiBold">Bem-Vindo</h1>
                <h1 className="font-primaryRegular">de volta!</h1>
                
             </div>
            <div className="relative flex justify-center top-[-125px] z-0">

            <form onSubmit={Validacao} className="flex flex-col gap-y-4">
              
              <label htmlFor="" className="text-[20px] font-primaryRegular">Usuário</label>
              <input type="text" value={username} onChange={(event) => {setNewUsername(event.target.value)}} className="bg-white h-8 text-2xl w-78 h-10 rounded-full"/>
              
              <label htmlFor="" className="text-[20px] font-primaryRegular">Senha</label>
              <input  type="password" value={password} onChange={(event) => {setNewPassword(event.target.value)}} className="bg-white h-8 text-2xl w-78 h-10 rounded-full" />
              <button type="submit" className="font-primarySemiBold bg-white text-[#FE770B] w-28 h-10 mx-auto text-2xl rounded-full">Entrar</button>
               
               <div className="mx-auto text-white">
               <Dialog>
               <DialogTrigger asChild>     
               <h1>Esqueci minha senha!</h1>    
               </DialogTrigger> 
               <DialogContent>
               <Forget/>
               </DialogContent>
               </Dialog>
              
               </div>
            </form>      
            </div>
            </div>
    </>
    )
}