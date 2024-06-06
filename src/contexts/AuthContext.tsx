import { createContext, useContext, useState } from 'react';

const ContextoAutenticacao = createContext(null);

export const ProvedorAutenticacao = ({ children }) => {
  const [credenciais, setCredenciais] = useState({
    usuario: 'admin',
    senha: '123'
  });
  const [validacao, setValidacao] = useState(false);

  const atualizarCredenciais = (novoUsuario, novaSenha) => {
    setCredenciais({ usuario: novoUsuario, senha: novaSenha });
  };

  return (
    <ContextoAutenticacao.Provider value={{ credenciais, atualizarCredenciais, validacao, setValidacao }}>
      {children}
    </ContextoAutenticacao.Provider>
  );
};

export const usarAutenticacao = () => useContext(ContextoAutenticacao);
