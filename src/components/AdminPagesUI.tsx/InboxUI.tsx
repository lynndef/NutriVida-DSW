import { useState } from "react";
import { Inbox } from "../ChamadasAPI/AllRequests";
import emailjs from "@emailjs/browser";
import { Card } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";

export function InboxUI() {
  const [name, setName] = useState('');
  const [toemail, setToEmail] = useState('');
  const [message, setMessage] = useState('');
  const [message_rem, setMessage_rem] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: 'NutriVida',
      from_email: 'nutrividaweb@gmail.com',
      to_name: name,
      to_email: toemail,
      message: message
    };

    emailjs
      .send('service_vtvv5qc', 'template_gzrdvuv', templateParams, 'q6yyVkFsXFWIgZ_46')
      .then(
        () => {
          console.log('SUCCESSo!');
          setName('');
          setToEmail('');
          setMessage('');
          setMessage_rem('');
          toast.success('Email Enviado com sucesso!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const MensagemSelecionada = (item) => {
    setName(item.nome_rem);
    setToEmail(item.email_rem);
    setMessage_rem(item.mensagem);
    
  };

  return (
    <div className="flex bg-white w-screen justify-center font-Geist-Sans">
      <Toaster position="top-center" richColors />
      <div className="bg-white flex flex-col pl-0 gap-2 pt-8">
      <h1 className="text-black">
            <Link to="/AdminMenu">Admin-Menu</Link> &nbsp; &gt; 
            <span className="text-gray-600"> &nbsp; Inbox</span>
        </h1>
        <h1 className="font-bold text-[24px] pt-2">Inbox</h1>
        <Card className="border-[#27272A] bg-[#151518] w-[752px] h-[600px]">
          <ScrollArea className="h-[580px] w-[745px] rounded-md border-black">
            <div className="flex flex-col gap-3">
              <Inbox MensagemSelecionada={MensagemSelecionada} />
            </div>
          </ScrollArea>
        </Card>
      </div>

        <div>
      <Card className="bg-black h-[600px] w-[752px] ml-6 border-[#27272A] mt-28">
        <form className="flex flex-col" onSubmit={sendEmail}>

         <div className="flex flex-col pt-8 ">

         <Card className="border-[#27272A] bg-[#151518] text-white pl-12 h-[70px] font-medium ">
         <h1 className="w-[90px] " onChange={(e) => setName(e.target.value)} >{name}</h1>  
          <h1 className="w-[90px] " onChange={(e) => setToEmail(e.target.value)}/> {toemail}<h1/>
         </Card>
          </div>

          <div>
          <Card className="border-[#27272A] bg-[#151518] text-white pl-12 h-[310px] pt-4">
             <h1 className="text-white text-sm" onChange={(e) => setMessage_rem(e.target.value)}>{message_rem}</h1> 
           </Card>
          </div>
      
          <textarea
            className="w-[710px] h-[100px] bg-black border-[#27272A] border-2 text-white mt-4 mx-auto max-h-[100px]" 
            placeholder={"Responder para " + name}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className="bg-white text-black font-medium w-16 h-8 rounded-sm mt-4 ml-auto mr-6" type="submit">Enviar</button>
        </form>
      </Card>
    </div>
    </div>
  );
}
