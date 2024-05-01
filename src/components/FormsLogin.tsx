import { FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import {  DialogTrigger, Dialog} from "./ui/dialog";

export function FormsLogin(){

    const Navigate = useNavigate();
   
       function Validacao(event: FormEvent){

         event.preventDefault();
         Navigate("/login"); 

       }
    return(
        <div className='relative top-[-550px] pl-[50px] z-10'>  
        <Dialog>
          <DialogTrigger asChild onClick={Validacao}>         
          <img src="/imagens/avatar-logo.webp" alt="" className='avatar w-[80px]' />
          </DialogTrigger> 
        </Dialog>
      </div>
    )
}