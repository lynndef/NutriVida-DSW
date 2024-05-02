import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function FormsLogin(){

    const Navigate = useNavigate();
   
       function Nav(event: FormEvent){

         event.preventDefault();
         Navigate("/login")
       }

    return(
        <div className='relative top-[-550px] pl-[50px] z-10'>  
          <div onClick={Nav} className="inline-block">         
          <img src="/imagens/avatar-logo.webp" alt="" className='avatar w-[80px]' />
          </div> 
        </div>
     
    )
}