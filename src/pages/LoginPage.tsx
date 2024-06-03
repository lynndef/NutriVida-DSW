import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/LandingPage/Header";
import { DialogContent, DialogTrigger, Dialog } from "../components/ui/dialog";
import { Forget } from "../components/Forms/FormsForgePasswordt";
import { usarAutenticacao } from "../contexts/AuthContext";
import { Toaster, toast } from "sonner";

export function LoginPage() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const { credenciais } = usarAutenticacao();

  function Validacao(event) {
    event.preventDefault();
    if (usuario === credenciais.usuario && senha === credenciais.senha) {
      navigate("/AdminMenu");
    } else {
      toast.error('Usuário ou senha incorretos!');
    }
  }

  return (
    <>
      <Toaster position="top-center" richColors/>   
       <main className="flex h-screen">
       <section className="grow-[0.7] bg-white">

       <div className="flex items-center justify-center mt-[80px]">
        <img src="imagens/nutrivida-logo.webp" alt=""className="w-[220px]" />
        </div>
    
        <div className="text-4xl text-center pt-20 relative top-[-185px] z-20 text-black mt-[170px]">
          <h1 className="font-primarySemiBold">Bem-Vindo</h1>
          <h1 className="font-primaryRegular">de volta!</h1>
        </div>
        <div className="relative flex justify-center top-[-125px] z-0">
          <form onSubmit={Validacao} className="flex flex-col gap-y-4">
            <label htmlFor="usuario" className="text-[20px] font-primaryRegular">Usuário</label>
            <input type="text" id="usuario" value={usuario} onChange={(event) => setUsuario(event.target.value)} className="bg-black text-2xl w-78 h-10 rounded-full text-white" />

            <label htmlFor="senha" className="text-[20px] font-primaryRegular">Senha</label>
            <input type="password" id="senha" value={senha} onChange={(event) => setSenha(event.target.value)} className="bg-black  text-2xl w-78 h-10 rounded-full text-white" />
            
            <button type="submit" className="font-primarySemiBold bg-black text-white w-28 h-10 mx-auto text-2xl rounded-full">Entrar</button>
            
            <div className="mx-auto text-white">
              <Dialog>
                <DialogTrigger asChild>
                  <h1 className="cursor-pointer text-black">Esqueci minha senha!</h1>
                </DialogTrigger>
                <DialogContent>
                  <Forget />
                </DialogContent>
              </Dialog>
            </div>
          </form>
        </div>
        </section>  

        <section  className="bg-[#FE770B] grow-[1]"> 
        <Header />
        
    <div className="flex items-center text-[24px] justify-center pt-[280px] px-4 text-white text-center ">
    <p className=" max-w-[600px]">
    <span className="italic "> "Os alimentos mais simples proporcionam o mesmo prazer que as iguarias mais requintadas, desde que se remova a dor provocada pela falta." </span> <br/> - Epicuro

    </p>
  </div>
        </section>
        </main>
        
    </>
  );
}
