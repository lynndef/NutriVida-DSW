import { useState } from "react";
import { usarAutenticacao } from "../../contexts/AuthContext";
import { Toaster, toast } from "sonner";

export function Forget() {
  const [usuario, setUsuario] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const { credenciais, atualizarCredenciais } = usarAutenticacao();

  const ResetarSenha = (event) => {
    event.preventDefault();
    if (usuario !== credenciais.usuario) {
      toast.error('Usuário não encontrado!');
      return;
    }
    if (novaSenha === confirmarSenha) {
      atualizarCredenciais(usuario, novaSenha);
      toast.success('Senha alterada com sucesso!');
    } else {
      toast.error('As senhas não coincidem!');
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-8">
      <h1 className="text-4xl font-primarySemiBold">Esqueceu sua senha?</h1>
      <input
        className="placeholder:text-center bg-[#414141] rounded-md text-base font-primarySemiBold text-white h-12"
        type="text"
        placeholder="Usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <input
        className="placeholder:text-center bg-[#414141] rounded-md text-base font-primarySemiBold text-white h-12"
        type="password"
        placeholder="Nova senha"
        value={novaSenha}
        onChange={(e) => setNovaSenha(e.target.value)}
      />
      <input
        className="placeholder:text-center bg-[#414141] rounded-md text-base font-primarySemiBold text-white h-12"
        type="password"
        placeholder="Confirme a nova senha"
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
      />
      <button
        className="bg-black h-12 w-[300px] text-base font-primaryRegular text-white"
        onClick={ResetarSenha}
      >
        Redefinir senha
      </button>
    </div>
  );
}
