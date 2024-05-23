import { useState } from "react";
import { Inbox } from "../Tabelas/AdminTables";
import emailjs from "@emailjs/browser";
import { Card } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

export function InboxUI(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
    
        emailjs.send("service_4c4ngzo", "template_cufk7qq", templateParams, "q6yyVkFsXFWIgZ_46").then((Response) => {
            console.log("Email Enviado", Response.status, Response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("erro", err)
            alert('erro')
        }
    )
    }

    return(
        
        <>
        <div className="flex bg-white w-screen justify-center">
         <div className=" bg-white flex flex-col pl-0 gap-2 pt-8">
         <h1 className="text-black ">Admin-Menu &nbsp; &gt; <span className="text-gray-700"> &nbsp; Inbox</span> </h1>
         <h1 className=" font-bold text-[24px] pt-2">Inbox</h1>
         <Card className=" border-[#27272A] bg-[#151518] w-[752px] h-[600px]">
            <ScrollArea className="h-[580px] w-[745px] rounded-md border-black">
                <div className="flex flex-col gap-3">
            <Inbox />
                </div>
            </ScrollArea>
         </Card>

        </div>

        <Card className="bg-black h-[600px] w-[752px] ml-6 border-[#27272A] mt-28">

      <form className="form flex flex-col pt-6" onSubmit={sendEmail}>
        <input 
          className="w-[590px] h-[80px] bg-black border-[#27272A] border-2 text-white" 
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
           className="w-[590px] h-[150px] bg-black border-[#27272A] border-2 text-white" 
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
       <Card className=" bg-[#151518] h-[200px] border-[#27272A] ">
        <textarea 
          className="w-[550px] h-[100px] bg-black border-[#27272A] border-2 text-white mt-8 ml-6" 
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="bg-white text-black font-medium w-16 rounded-sm ml-[500px] mt-4" type="submit" > Enviar </button>
        </Card>

      </form>

    </Card>
        </div>


        
        </>
    )
}